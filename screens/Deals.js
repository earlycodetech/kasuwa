import { View,Text as Txt,StyleSheet,Platform,FlatList } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { Card,Text,Button } from "react-native-paper";
import { Themes } from "../assets/themes";
import { products } from "../assets/demo-products";

export function Deals () {
    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                <FlatList
                data={products}
                key={({item}) => item.id}
                renderItem={({item}) => {
                    return (
                        <Card style={styles.card}>
                            <View style={styles.cardContent}>
                                <Card.Cover style={styles.cardCover} source={item.thumbnail} />
                                <Text variant="titleLarge">{item.productName}</Text>
                            </View>
                            <View style={styles.cardActions}>
                                <Text variant="headlineMedium">₦{item.price}</Text>
                                <Button 
                                mode="contained" 
                                icon="cart" 
                                style={{width:120}}>Order</Button>
                            </View>
                        </Card>
                    )
                }}
                showsVerticalScrollIndicator={false}/>
            </View>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:Themes.sizes[3],
        paddingTop:Platform.OS == 'ios' ? 18 : 0,
    },
    card:{
        marginBottom:Themes.sizes[3]
    },
    cardActions:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:Themes.sizes[2],
        paddingHorizontal:Themes.sizes[1]
    },
    cardContent:{
        width:300,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:Themes.sizes[1],
        paddingTop:Themes.sizes[1]
    },
    cardCover:{
        height:80,
        width:80,
        marginRight:Themes.sizes[2]
    }
})