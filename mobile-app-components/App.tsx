import { Image, ImageBackground, Text, View } from "react-native";
const logoImage = require('./assets/adaptive-icon.png');

 
 export default function App() {
  return(
    <View style={{ flex: 1, backgroundColor: 'black'}}>
      {/* <Image source={logoImage} style={{ width: 100, height: 100 }} />
      <Image source={{ uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'}} style={{ width: 100, height: 100 }} /> */}
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text style={{ color: 'plum', fontSize: 16, fontWeight: 'bold' }}>Hello world!</Text>
      </ImageBackground>
    </View>
  )
 }