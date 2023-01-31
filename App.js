import { Text } from "react-native";
import { CustomSafeAreaView } from "./components/CustomSafeAreaView";

export default function App () {
  return (
    <CustomSafeAreaView>
      <Text>Kasuwa parent screen</Text>
    </CustomSafeAreaView>
  )
}