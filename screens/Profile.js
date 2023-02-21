import { useContext } from 'react';
import { AppContext } from '../infrastructure/AppContext';
import { Text,View,StyleSheet } from 'react-native';
import { CustomSafeAreaView } from '../components/CustomSafeAreaView';
import { Button } from 'react-native-paper';
import { Themes } from '../assets/themes';
import { signOut } from '@firebase/auth';
import { auth } from '../infrastructure/Firebase.settings';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                        width:98,
                        height:98,
                        borderRadius:100,
                        borderWidth:8,
                        borderColor:'#16FF00',
                        justifyContent:'center',
                        alignItems:'center',
                        marginBottom:16
                    }}>
                        <View style={{
                            width:94,
                            height:94,
                            borderRadius:100,
                            backgroundColor:'#C9F4AA'
                        }}></View>
                    </View> 
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Last name</Text>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Nnamani</Text>
                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>First name</Text>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Kenneth</Text>
                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Email</Text>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>ken.nnamani@gmail.com</Text>
                    </View>
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        borderBottomWidth:1,
                        borderBottomColor:'#DDDDDD',
                        paddingVertical:16
                        }}>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Account Type</Text>
                        <Text style={{fontSize:28,color:'#0F0E0E',fontWeight:'600'}}>Buyer</Text>
                    </View>

                    <View style={styles.actions}>
                        <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.action}>
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
                    buttonColor={Themes.colors.brown900}
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
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    actionsRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    action:{
        width:200,
        height:200,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Themes.colors.brown300,
        borderRadius:10
    },
    actionText:{
        fontSize:Themes.fontSizePoint.title
    }
})