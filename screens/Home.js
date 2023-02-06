import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { Themes } from "../assets/themes";

export function Home(){
    return(
        <CustomSafeAreaView>
            <View style={styles.content}>
                <Image 
                style={styles.carouselImage} 
                source = {require('../assets/images/flash.jpg')} />
            </View>

            <View style={styles.deals}>
                <View style={[styles.recentDeals, {backgroundColor:Themes.colors.blue100}]}>
                <Text style={styles.dealsHeading}> Recent Deals </Text>
                    <TouchableOpacity>
                        <Text style={styles.moreDeals}> See all deals </Text>
                    </TouchableOpacity>
                </View>                
                <View style={styles.productsList}>
                    <TouchableOpacity style={styles.product}>
                        <View> 
                            <Image source={require('../assets/images/myfi.webp')} style={styles.thumbnail}/> 
                        </View>
                        <Text style={styles.productName}> Airtel Broadband$ Rechable MyFi </Text>
                        <Text style={styles.productPrice}> ₦15500 </Text>
                    </TouchableOpacity>
                </View>                
            </View>

            <View style={styles.sponsored}>
                <View style={[styles.recentDeals, {backgroundColor:Themes.colors.purple100}]}>
                    <Text style={styles.dealsHeading}> Sponsored Deals </Text>
                        <TouchableOpacity>
                            <Text style={styles.moreDeals}> See all deals </Text>
                        </TouchableOpacity>
                </View> 
                <View style={styles.productsList}>
                    <TouchableOpacity style={styles.product}>
                        <View> 
                            <Image source={require('../assets/images/myfi.webp')} style={styles.thumbnail}/> 
                        </View>
                        <Text style={styles.productName}> Airtel Broadband$ Rechable MyFi </Text>
                        <Text style={styles.productPrice}> ₦15500 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        paddingHorizontal: Themes.sizes[3],
        justifyContent:'center'
    },
    brandName:{
        fontSize: 30,
        color:Themes.colors.purple500,
        fontWeight:'bold',
        marginBottom: 20
    },
    carouselImage:{
        height:100,
        width:'100%',
        borderRadius:8
    },
    deals:{
        flex:2.5,
        marginTVertical:Themes.sizes[2],        
        marginHorizontal:Themes.sizes[2],
    },
    recentDeals:{ 
        flex:1,       
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:12,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    dealsHeading:{
        fontSize:22,
    },
    moreDeals:{
        color:'#000'
    },
    sponsored:{
        flex:2.5,        
        marginHorizontal:Themes.sizes[2],
    },
    productsList:{
        flex:5,
        marginTop:Themes.sizes[2],
        paddingBottom:Themes.sizes[2],
    },
    product:{
        flex:1,
        width:200,
        padding:Themes.sizes[2],
        borderWidth: 1,
        borderColor:Themes.colors.gray400,
        borderRadiu:10
    },
    thumbnail:{
        height:120,
        width:'100%',
    },
    productName:{
        fontSize:Themes.fontSizePoint.title,
        fontWeight:'bold'
    },
    productPrice:{
        fontSize:Themes.fontSizePoint.h6,
        fontWeight:'bold'
    }
})