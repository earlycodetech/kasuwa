import { NavigationContainer } from "@react-navigation/native"
import { NativeStackNavigator } from "./infrastructure/NativeStackNavigator"
import { AppProvider } from "./components/AppContext"
export default function App () {
  return (
    <AppProvider>
      <NavigationContainer>
      <NativeStackNavigator/>
    </NavigationContainer>
    </AppProvider>
  )
}