import { useContext } from 'react';
import { AppContext } from '../infrastructure/AppContext';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native';
import { CustomSafeAreaView } from '../components/CustomSafeAreaView';
import { Button } from 'react-native-paper';
import { Themes } from '../assets/themes';
import { signOut } from '@firebase/auth';
import { auth } from '../infrastructure/Firebase.settings';

export function Profile ({navigation}) {
    const {setIsSignedIn,isSignIn,uid,setUid} = useContext(AppContext);

    function SignOutUser () {
        signOut(auth)
        .then(() => {
            setIsSignedIn(false);
            setUid(null);
        })
        .catch(e => console.error(e))
    }
    
    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                {
                isSignIn 
                ?
                <>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Last name</Text>
                        <Text style={{fontSize:18,color:'#0F0E0E',fontWeight:'600'}}>Nnamani</Text>
                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>First name</Text>
                        <Text style={{fontSize:18,color:'#0F0E0E',fontWeight:'600'}}>Kenneth</Text>
                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Email</Text>
                        <Text style={{fontSize:18,color:'#0F0E0E',fontWeight:'600'}}>ken.nnamani@gmail.com</Text>
                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Account Type</Text>
                        <Text style={{fontSize:18,color:'#0F0E0E',fontWeight:'600'}}>Buyer</Text>
                    </View>

                    <View style={styles.actions}>
                        <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.action}
                            onPress={() => navigation.navigate('Add Product')}>
                                <Text style={styles.actionText}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Text style={styles.actionText}>Listings</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.action}>
                                <Text style={styles.actionText}>Sales</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Text style={styles.actionText}>Reports</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button
                    icon='logout'
                    mode='outlined'
                    buttonColor={Themes.colors.brown700}
                    textColor='white'
                    style={{
                        borderRadius:8,
                        paddingVertical:4,
                        borderColor:Themes.colors.brown900,
                        marginTop:16
                    }}
                    onPress={SignOutUser}>Log off</Button>
                </>
                :
                <>
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
                </>
                }
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
    },
    actions:{
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:Themes.sizes[3]
    },
    actionsRow:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginBottom:Themes.sizes[3]
    },
    action:{
        width:160,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Themes.colors.brown900,
        borderRadius:10
    },
    actionText:{
        fontSize:Themes.fontSizePoint.title,
        color:Themes.colors.brown300
    }
})