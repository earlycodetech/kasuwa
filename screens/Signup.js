import { useContext } from 'react';
import { AppContext } from '../components/AppContext';
import { Text,View,StyleSheet,TouchableOpacity,Alert } from 'react-native';
import { CustomSafeAreaView } from '../components/CustomSafeAreaView';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Themes } from '../assets/themes';
import { TextInput,Button } from 'react-native-paper';
import { createUserWithEmailAndPassword,onAuthStateChanged } from '@firebase/auth';
import { auth } from '../infrastructure/Firebase.settings';

const formRules = yup.object({
    email:yup.string('invalid characters')
    .email('must be an email')
    .required('This is a compulsory field'),

    password:yup.string('invalid characters')
    .min(8,'must be up to 8 numbers')
    .required('This is a compulsory field')
    .oneOf([yup.ref('passwordConfirmation'),null],'passwords must match')
});

export function Signup ({navigation}) {
    const {setIsSignedIn,setUid} = useContext(AppContext);

    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headerText}>Create a Kasuwa account</Text>

                <Formik
                initialValues={{email:'',password:'',passwordConfirmation:''}}
                onSubmit={(values,event) => {
                    createUserWithEmailAndPassword(auth,values.email,values.password)
                    .then(() => {
                        onAuthStateChanged(auth,(user) => {
                            setUid(user.uid);
                            setIsSignedIn(true);
                        });
                        navigation.navigate('Profile');
                    })
                    .catch((e) => {
                        Alert.alert('Error Message','There was a problem carrying your request.');
                        console.log(e)
                    });

                    //event.resetForm();
                }}
                validationSchema={formRules}>
                    {({handleChange, handleBlur, handleSubmit, values, errors,touched}) => {
                        return (
                            <View style={styles.formBlock}>
                                <TextInput 
                                mode='outlined'
                                placeholder="email address"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[1]}}
                                keyboardType='email-address'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}/>
                                <Text style={{display:touched.email && errors.email ? 'flex' : 'none', color:'red'}}>
                                    {touched.email && errors.email}
                                </Text> 

                                <TextInput 
                                mode='outlined'
                                placeholder="create password"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[1]}}
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}/>
                                <Text style={{display:touched.password && errors.password ? 'flex' : 'none', color:'red'}}>
                                    {touched.password && errors.password}
                                </Text>

                                <TextInput 
                                mode='outlined'
                                placeholder="confirm password"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[3]}}
                                secureTextEntry={true}
                                onChangeText={handleChange('passwordConfirmation')}
                                onBlur={handleBlur('passwordConfirmation')}
                                value={values.passwordConfirmation}/>

                                <Button
                                mode='outlined'
                                buttonColor={Themes.colors.blue400}
                                textColor='white'
                                style={{borderRadius:8,paddingVertical:4,borderColor:Themes.colors.blue400}}
                                onPress={handleSubmit}>Create Acccount</Button>
                            </View>
                        )
                    }}
                </Formik>

                <View style={styles.alreadyHaveAccount}>
                    <Text style={styles.footerText}>Already have a Kasuwa account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                        <Text style={[styles.footerText,styles.footerTextColor]}> Go to Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:Themes.sizes[2]
    },
    headerText:{
        fontSize:Themes.fontSizePoint.h4,
        fontWeight:'200'
    },
    formBlock:{
        paddingTop:Themes.sizes[4]
    },
    alreadyHaveAccount:{
        flexDirection:'row',
        marginTop:Themes.sizes[3]
    },
    footerText:{
        fontSize:Themes.fontSizePoint.title
    },
    footerTextColor:{
        color:Themes.colors.blue400
    }
});