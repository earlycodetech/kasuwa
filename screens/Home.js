import { View,Text,Stylesheet,ScrollView, TouchableOpacity } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
export function Home () {
    return(
       <CustomSafeAreaView>
        <ScrollView>
        <View style={styles.content}>
            <Text styles={styles.brandName}>Kasuwa</Text>
            <Image
            style={styles.carouselImage} 
            source={require('../assets/images/flash.jpg')}/>

            <View style={styles.deals}>
                <Text style={styles.dealsHeading}>Recent deals</Text>
                <TouchableOpacity>

                </TouchableOpacity>

            </View>

        </View>
        </ScrollView>
       </CustomSafeAreaView>
    
    )
}
const styles =StyleSheet.create({
    content:{
        paddingHorizontal:10
    },
    brandname:{
        frontsize:30,
        fontweight: 'bold',
        color:'puple',
        MarginBottom:20

    },
    carouselImage:{
        height:100,
        width:'100%',
        borderRadius:8
    },
    deals:{
        flexDirection:'row',
        justifyContent:'speac-between',
        alignItems:'center',
        padding:12,
        borderTopleftRadius:8,
        borderToprightRadius:8,
        marginTop:20,
        marginHorizontal:10,

    },
    deals

})