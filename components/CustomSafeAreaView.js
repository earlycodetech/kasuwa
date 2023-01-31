import { View,StyleSheet } from "react-native";

export function CustomSafeAreaView ({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'magenta'
    }
})