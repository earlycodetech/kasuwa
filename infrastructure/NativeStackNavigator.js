//ROUTING

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";
import { Categories } from "../screens/Categories";
import { Profile } from "../screens/Profile";

const Stack = createNativeStackNavigator();

export function NativeStackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="My Home" component={Home} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Product Details" component={Product} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}