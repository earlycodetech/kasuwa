import { View, Text, StyleSheet, ScrollView, Image , TouchableOpacity} from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
export function Home() {
    return (
        <CustomSafeAreaView>
         <ScrollView>
         <View style={styles.content}>
                <Text style={styles.brandName}>Kasuwa</Text>
                <Image style={styles.corouselImage}
                    source={require('../assets/images/flash.jpg')} />
            </View>
            <View style={styles.deals}>
                <Text style={styles.dealsHeading}>Recent Deals</Text>
                <TouchableOpacity style={styles.moreDeals}>
                    <Text>See all Deals</Text>
                </TouchableOpacity>
            </View>
         </ScrollView>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:10
    },
    brandName: {
        fontSize: 20,
        fontWeight:'bold',
        color: 'purple',
        marginBottom:20
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
        backgroundColor:'E98EAD',
        borderTopRadius:8,
        marginTop:20,
        marginHorizontal:10,
    },
    dealsHeading:{
        fontSize:22
    },
    moreDeals:{
        color:'#FFC6D3'
    }
})