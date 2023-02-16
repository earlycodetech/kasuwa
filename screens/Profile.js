import { Text,View,StyleSheet } from 'react-native';
import { CustomSafeAreaView } from '../components/CustomSafeAreaView';
import { Button } from 'react-native-paper';
import { Themes } from '../assets/themes';

export function Profile ({navigation}) {
    return (
       <CustomSafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerInfo}>
                    <Text style={styles.infoText}>You are not signed in. Sign into your account to do more on Kasuwa</Text>
                </View>

                <Button 
                mode='contained' 
                style={{borderRadius:8,marginBottom:10}}
                buttonColor={Themes.colors.blue400}
                onPress={() => navigation.navigate('Sign Up')}>Create Account</Button>

                <Button 
                mode='outlined' 
                style={{borderRadius:8,borderColor:Themes.colors.blue400}}
                textColor={Themes.colors.blue400}
                onPress={() => navigation.navigate('Sign In')}>Sign In To Kasuwa</Button>
            </View>
       </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:Themes.sizes[3],
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    headerInfo:{
        paddingBottom:Themes.sizes[4]
    },
    infoText:{
        fontSize:Themes.fontSizePoint.title,
        textAlign:'center'
    }
})