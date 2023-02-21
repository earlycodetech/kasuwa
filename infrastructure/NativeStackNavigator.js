import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Product } from '../screens/Product';
import { Home } from '../screens/Home';
import { Categories } from "../screens/Categories";
import { Profile } from "../screens/Profile";
import { Deals } from "../screens/Deals";
import { Signin } from '../screens/Signin';
import { Signup } from '../screens/Signup';
import { AddProduct } from "../screens/AddProduct";

const Stack = createNativeStackNavigator();

export function NativeStackNavigator () {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="My Home" component={Home}/>
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:true}}/>
            <Stack.Screen name="Product Details" component={Product} options={{headerShown:true}}/>
            <Stack.Screen name="Deals" component={Deals} options={{headerShown:true}}/>
            <Stack.Screen name="Sign In" component={Signin} options={{headerShown:true}}/>
            <Stack.Screen name="Sign Up" component={Signup} options={{headerShown:true}}/>
            <Stack.Screen name="Add Product" component={AddProduct} options={{headerShown:true}}/>
        </Stack.Navigator>
    )
}