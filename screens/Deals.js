import { View, Text as Txt, StyleSheet, Platform, FlatList } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { Card, Text, Button } from "react-native-paper";
import { Themes } from "../assets/themes";
import { products } from "../assets/demo-products";


export function Deals() {
    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    key={({ item }) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <Card style={styles.card}>
                                <Card.Cover source={item.thumbnail} />
                                <View style={styles.cardContent}>
                                    <Text variant="titleLarge">{item.productName}</Text>
                                </View>
                                <View style={styles.cardActions}>
                                    <Text variant="headlineMeduim">₦{item.price}</Text>
                                    <Button mode="contained"
                                     icon="cart" 
                                     style={{ width: 120 }}>Order</Button>
                                </View>

                            </Card>
                        )
                    }} />

            </View>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Themes.sizes[3],
        marginTop: Platform.OS == 'ios' ? Themes.sizes[3] : null
    },
    card:{
        marginBottom:Themes.sizes[3]
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: Themes.sizes[2],
        paddingHorizontal: Themes.sizes[1]
    },
cardContent:{
    paddingHorizontal:Themes.sizes[1]
}
    

})