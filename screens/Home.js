import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";

export function Home(){
    return(
        <CustomSafeAreaView>
        <ScrollView>
        <View style={styles.content}>
            <Text style={styles.brandName}> Kasuwa </Text>
            <Image 
            style={styles.carouselImage} 
            source = {require('../assets/images/flash.jpg')} />
        </View>

        <View style={styles.deals}>
            <Text style={styles.dealsHeading}> Recent Deals </Text>
            <TouchableOpacity>
                <Text style={styles.moreDeals}> See all deals </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: 10,
    },
    brandName:{
        fontSize: 30,
        color:'purple',
        fontWeight:'bold',
        marginBottom: 20
    },
    carouselImage:{
        height:100,
        width:'100%',
        borderRadius:8
    },
    deals:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:12,
        backgroundColor:'#E98EAD',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginTop:20,
        marginHorizontal:10
    },
    dealsHeading:{
        fontSize:22,
    },
    moreDeals:{
        color:'#FFC6D3'
    },
})