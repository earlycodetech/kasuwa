import { View,Text,StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { CustomSafeAreaView } from '../components/CustomSafeAreaView';
import { Themes } from '../assets/themes';
import { Formik } from 'formik';
import * as yup from 'yup';

export function AddProduct () {
    return (
        <CustomSafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headerInfo}>List a product on Kasuwa</Text>
            </View>
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerInfo:{
        fontSize:Themes.fontSizePoint.h6,
        fontWeight:'500',
        color:Themes.colors.brown700
    }
})