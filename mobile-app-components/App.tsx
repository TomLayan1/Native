import { useState } from "react";
import { Button, Image, Modal, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
const logoImage = require('./assets/adaptive-icon.png');

 
 export default function App() {
  const [test, setTest] = useState<string>('')
  const [isModal, setIsModal] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return(
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <StatusBar backgroundColor='plum' barStyle='dark-content' hidden={isVisible} />
            <Image source={logoImage} style={{ width: 330, height: 330, margin: 'auto' }} />
            <Text style={{  color: 'white', lineHeight: 23, textAlign: 'justify', padding: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
            </Text>
            <Pressable style={{  backgroundColor: 'plum', paddingVertical: 10, width: '60%', margin: 'auto', marginBottom: 20 }} onPress={()=>setIsModal(true)}>
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>SHOW MODAL</Text>
            </Pressable>

            <Pressable style={{  backgroundColor: 'plum', paddingVertical: 10, width: '60%', margin: 'auto', marginBottom: 20 }} onPress={()=>setIsVisible(!isVisible)}>
              <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>SHOW STATUSBAR</Text>
            </Pressable>

            <Modal
              visible={isModal}
              onRequestClose={()=>setIsModal(false)}
              animationType="slide"
              presentationStyle="pageSheet"
            >
              <View style={{ flex: 1, backgroundColor: 'plum'}}>
                <Text style={{ color: 'white', textAlign: 'justify',  padding: 10, lineHeight: 23 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
                </Text>
                <Pressable style={{  backgroundColor: 'black', paddingVertical: 10, width: '60%', margin: 'auto', marginBottom: 20 }} onPress={()=>setIsModal(false)}>
                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>CLOSE</Text>
                </Pressable>
              </View>
            </Modal>
        </View>
    </ScrollView>
  )
 }