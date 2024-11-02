import { Text, View } from "react-native";
import { GreetPropType } from "../Interface/interface";

export default function Greet ({name}: GreetPropType) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  )
}