import { NavigationContainer } from "@react-navigation/native"
import { NativeStackNavigator } from "./infrastructure/NativeStackNavigator"

export default function App () {
  return (
    <NavigationContainer>
        <NativeStackNavigator />
    </NavigationContainer>
  )
}