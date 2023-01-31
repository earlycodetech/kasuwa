import { StyleSheet,SafeAreaView,Platform,StatusBar } from "react-native";

console.log(StatusBar.currentHeight)

export function CustomSafeAreaView ({children}) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS == 'android' ? StatusBar.currentHeight : null,
    }
})