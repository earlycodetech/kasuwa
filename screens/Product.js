import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import {CustomSafeAreaView} from "../components/CustomSafeAreaView";
import { Button } from "react-native-paper";
import { Themes } from "../assets/themes";

export function Product(){
    return(
        <CustomSafeAreaView>
            <ScrollView style={styles.content}>
                <Text styles={styles.productName}> ADIDAS ORIGINALS + KANYE WEST ANNOUNCE THE YEEZY BOOST 700 MAUVE </Text>
                <Text style={styles.datePosted}> 19-OCT-2018 </Text>
                <Image style={styles.thumbnail} source={require('../assets/single-product/main.jpg')} />
                <View style={styles.order}>
                    <Text style={styles.price}> ₦189000 </Text>
                    <Button mode="contained" buttonColor="green"> Order Now </Button>
                </View>

                <Text style="styles.description"> The YEEZY BOOST 700 features a full-length drop in boost midsole, an upper composed of mauve suede overlays and black premium leather with mesh underlays and green heel details. The shoe has a gum sole along with reflective heel and Three Stripes.
                </Text>
                <View style={styles.gallery}>
                    <Image style={styles.gallerImg} source={require('../assets/single-product/527111.jpg')} />
                    <Image style={styles.gallerImg} source={require('../assets/single-product/527113.jpg')} />
                    <Image style={styles.gallerImg} source={require('../assets/single-product/527114.jpg')} />
                    <Image style={styles.gallerImg} source={require('../assets/single-product/527115.jpg')} />
                    <Image style={styles.gallerImg} source={require('../assets/single-product/527118.jpg')} />
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        margin:Themes.sizes[2],
    },
    productName:{
        fontSize:26,
        fontWeight:'800',
        marginBottom:Themes.sizes[2]
    },
    datePosted:{
        fontSize:16,
        marginBottom:Themes.sizes[2]
    },
    thumbnail:{
        height:200,
        width:'100%',
        marginBottom:Themes.sizes[3]
    },
    order:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:Themes.sizes[2]
    },
    price:{
        fontSize:32,
        fontWeight:'600',
    },
    description:{
        fontSize:18,
        marginBottom:Themes.sizes[3],
        color:Themes.colors.gray700,
    },
    gallery:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    gallerImg:{
        marginBottom:Themes.sizes[2],
        width:(Dimensions.get('screen').width - (Themes.sizes[2]) * 2 - 10) / 2,
        height:(Dimensions.get('screen').width - (Themes.sizes[2]) * 2 - 10) / 2,
    },
})
    