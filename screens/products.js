import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";
import { Button } from "react-native-paper";

export function Product () {
    return (
        <CustomSafeAreaView>
            <ScrollView>
                <Text style={styles.productName}>ADIDAS ORIGINALS + KANYE WEST ANNOUNCE THE YEEZY BOOST 700 MAUVE</Text>
                <Text style={styles.datePosted}>19-OCT-2023</Text>
                <image></image>
            </ScrollView>
        </CustomSafeAreaView>
    )
}