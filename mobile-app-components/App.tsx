import { useState } from "react";
import { Button, Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
const logoImage = require('./assets/adaptive-icon.png');

 
 export default function App() {
  const [test, setTest] = useState<string>('')
  const [isModal, setIsModal] = useState<boolean>(false)
  return(
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <View>
        <Image source={logoImage} style={{ width: 330, height: 330, margin: 'auto' }} />
        <Text style={{  color: 'white', lineHeight: 23, textAlign: 'justify', padding: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
        </Text>
        <Text style={{ color: 'white'}}>{test}</Text>
        <Pressable style={{  backgroundColor: 'midnightblue', paddingVertical: 10, width: '60%', margin: 'auto', marginBottom: 20 }} onPress={()=>setIsModal(true)}>
          <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>BUTTON</Text>
        </Pressable>

        <Modal
          visible={isModal}
          onRequestClose={()=>setIsModal(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={{ flex: 1, backgroundColor: 'darkblue'}}>
            <Text style={{ color: 'white' }}>Modal Content</Text>
            <Button title='Close' onPress={()=>setIsModal(false)} />
          </View>
        </Modal>
      </View>
    </ScrollView>
  )
 }