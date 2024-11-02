import { StatusBar, View } from "react-native";
import Greet from "./Components/Greet";
 
 export default function App() {

  return(
    <View style={{ flex: 1, backgroundColor: "plum", padding: 10 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Greet name={'Kelvin Greene'} />
    </View>
  )
 }