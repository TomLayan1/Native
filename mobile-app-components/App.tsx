import { Text, View } from "react-native";

 
 export default function App() {
  return(
    <View style={{ flex: 1, backgroundColor: 'black'}}>
      <View style={{ flexDirection: 'row', backgroundColor: 'plum'}}>
        <View style={{ height: 200, width: 200, backgroundColor: 'blue'}}></View>
        <View style={{ height: 200, width: 200, backgroundColor: 'green'}}>
          <Text>Hello world!</Text>
        </View>
      </View>
    </View>
  )
 }