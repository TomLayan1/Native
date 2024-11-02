import { useState } from "react";
import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";
const logoImage = require('./assets/adaptive-icon.png');

 
 export default function App() {
  const [test, setTest] = useState<string>('')
  return(
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <Image source={logoImage} style={{ width: 330, height: 330 }} />
      <Text style={{  color: 'white', lineHeight: 23, textAlign: 'justify', padding: 10 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
      </Text>
      <Text style={{ color: 'white'}}>{test}</Text>
      <Button title='Press' onPress={()=> setTest('Button pressing')} />
      <Pressable style={{  backgroundColor: 'midnightblue', paddingVertical: 10, width: '60%', margin: 'auto', marginBottom: 20 }} onPressIn={()=>console.log('Button has pressed out')}>
        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>BUTTON</Text>
      </Pressable>

      <Pressable style={{  backgroundColor: 'green', paddingVertical: 10, width: '60%', margin: 'auto' }} onLongPress={()=>console.log('Button was long pressed')}>
        <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>BUTTON</Text>
      </Pressable>
    </ScrollView>
  )
 }