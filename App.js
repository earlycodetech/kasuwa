import { NavigationContainer } from "@react-navigation/native"
import { NativeStackNavigator } from "./infrastructure/NativeStackNavigator"
import { AppContext, AppProvider } from "./infrastructure/AppContext"

export default function App () {
  return (
   <AppProvider>
     <NavigationContainer>
      <NativeStackNavigator/>
    </NavigationContainer>
   </AppProvider>
  )
}