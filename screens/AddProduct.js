import { View,Text,StyleSheet,Alert } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import { CustomSafeAreaView } from '../components/CustomSafeAreaView';
import { Themes } from '../assets/themes';
import { Formik } from 'formik';
import * as yup from 'yup';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../infrastructure/Firebase.settings';

const formRules = yup.object({
    productName:yup.string('invalid characters')
    .required('This is a compulsory field'),
    description:yup.string('invalid characters')
    .required('This is a compulsory field'),
    price:yup.number('must be a number')
    .min(1,'set price for N1 or above')
    .required('This is a compulsory field'),
    category:yup.string('invalid characters')
    .required('This is a compulsory field'),
    mainPhoto:yup.string('invalid characters')
    .required('This is a compulsory field')
});

export function AddProduct () {
    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headerInfo}>List a product on Kasuwa</Text>

                <Formik
                initialValues={{productName:'',description:'',price:'',category:'',mainPhoto:''}}
                onSubmit={(values,event) => {
                    addDoc(collection(db,'products'),{
                        productName:values.productName,
                        desc:values.description,
                        price:values.price,
                        category:values.category,
                        thumbnail:values.mainPhoto
                    })
                    .then(() => Alert.alert('Message','You have successfully listed a product'))
                    .catch(error => console.log(error))

                    //event.resetForm();
                }}
                validationSchema={formRules}>
                    {({handleChange, handleBlur, handleSubmit, values, errors,touched}) => {
                        return (
                            <View style={styles.formBlock}>
                                <TextInput 
                                mode='outlined'
                                placeholder="product name"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[1]}}
                                onChangeText={handleChange('productName')}
                                onBlur={handleBlur('productName')}
                                value={values.productName}/>
                                <Text style={{display:touched.productName && errors.productName ? 'flex' : 'none', color:'red'}}>
                                    {touched.productName && errors.productName}
                                </Text> 
                                <TextInput 
                                mode='outlined'
                                placeholder="product description"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[1]}}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}/>
                                <Text style={{display:touched.description && errors.description ? 'flex' : 'none', color:'red'}}>
                                    {touched.description && errors.description}
                                </Text> 
                                <TextInput 
                                mode='outlined'
                                placeholder="product price"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[1]}}
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                value={values.price}/>
                                <Text style={{display:touched.price && errors.price ? 'flex' : 'none', color:'red'}}>
                                    {touched.price && errors.price}
                                </Text> 
                                <TextInput 
                                mode='outlined'
                                placeholder="category"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[1]}}
                                onChangeText={handleChange('category')}
                                onBlur={handleBlur('category')}
                                value={values.category}/>
                                <Text style={{display:touched.category && errors.category ? 'flex' : 'none', color:'red'}}>
                                    {touched.category && errors.category}
                                </Text> 
                                <TextInput 
                                mode='outlined'
                                placeholder="product photo link"
                                style={{fontSize:24,color:'#3C4048',marginBottom:Themes.sizes[1]}}
                                onChangeText={handleChange('mainPhoto')}
                                onBlur={handleBlur('mainPhoto')}
                                value={values.mainPhoto}/>
                                <Text style={{display:touched.mainPhoto && errors.mainPhoto ? 'flex' : 'none', color:'red'}}>
                                    {touched.mainPhoto && errors.mainPhoto}
                                </Text> 

                                <Button
                                mode='outlined'
                                buttonColor={Themes.colors.brown700}
                                textColor='white'
                                style={{borderRadius:8,paddingVertical:4,borderColor:Themes.colors.blue400}}
                                onPress={handleSubmit}>Create Listing</Button>
                            </View>
                        )
                    }}
                </Formik>
            </View>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:Themes.sizes[2]
    },
    headerInfo:{
        fontSize:Themes.fontSizePoint.h6,
        fontWeight:'500',
        color:Themes.colors.brown700
    },
    formBlock:{
        paddingTop:Themes.sizes[4]
    },
})