import { View,Text,StyleSheet,ScrollView,Image,Dimensions } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { Button } from "react-native-paper";
import { Themes } from "../assets/themes";

export function Product () {
    return (
        <CustomSafeAreaView>
            <ScrollView style={{paddingHorizontal:10}}>
                <Text style={styles.productName}>ADIDAS ORIGINALS + KANYE WEST ANNOUNCE THE YEEZY BOOST 700 MAUVE</Text>
                <Text style={styles.datePosted}>19-OCT-2018</Text>

                <Image style={styles.thumbnail} source={require('../assets/images/single-product/main.jpg')}/>

                <View style={styles.order}>
                    <Text style={styles.price}>₦189000</Text>
                    <Button mode="contained" buttonColor="green">Order</Button>
                </View>

                <Text style={styles.description}>The YEEZY BOOST 700 features a full-length drop in boost midsole, an upper composed of mauve suede overlays and black premium leather with mesh underlays and green heel details. The shoe has a gum sole along with reflective heel and Three Stripes.</Text>

                <View style={styles.gallery}>
                    <Image style={styles.galleryImg} source={require('../assets/images/single-product/527111.jpg')}/>
                    <Image style={styles.galleryImg} source={require('../assets/images/single-product/527113.jpg')}/>
                    <Image style={styles.galleryImg} source={require('../assets/images/single-product/527114.jpg')}/>
                    <Image style={styles.galleryImg} source={require('../assets/images/single-product/527115.jpg')}/>
                    <Image style={styles.galleryImg} source={require('../assets/images/single-product/527118.jpg')}/>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    productName:{
        fontSize:26,
        fontWeight:'600',
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
        marginBottom:Themes.sizes[3]
    },
    price:{
        fontSize:32,
        fontWeight:'600',
    },
    description:{
        fontSize:18,
        marginBottom:Themes.sizes[3],
        color:Themes.colors.gray700
    },
    gallery:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    galleryImg:{
        width:(Dimensions.get('screen').width - (Themes.sizes[2]) * 2 - 10) /2,
        height:(Dimensions.get('screen').width - (Themes.sizes[2]) * 2 - 10) /2,
        marginBottom:Themes.sizes[2]
    }
})

