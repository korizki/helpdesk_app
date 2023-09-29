import { View, Image, Alert, StyleSheet, StatusBar, KeyboardAvoidingView } from "react-native"
import FormLogin from "../components/organism/FormLogin"
import { Colors } from "../assets/styles"

export default function LoginScreen({ navigation }: any) {
   const processLogin = (username: string, password: string) => {
      if (username != '' && password != '') {

      } else {
         Alert.alert('Required Field', 'Username and Password can\'t be blank.', [{
            text: 'OK',
            onPress: () => false
         }])
      }
   }
   return (
      <View style={[style.mainWrap]}>
         <StatusBar
            backgroundColor={Colors.bgBlue}
            barStyle={"dark-content"}
         />
         <KeyboardAvoidingView behavior="position" >
            <FormLogin processLogin={processLogin} navigation={navigation} />
         </KeyboardAvoidingView>
         <Image
            source={require('../assets/images/login.png')}
            style={style.imageBottom}
            resizeMode="contain"
         />
      </View>
   )
}

const style = StyleSheet.create({
   mainWrap: {
      flex: 1,
      backgroundColor: Colors.bgBlue,
      justifyContent: 'space-between',
   },
   imageBottom: {
      height: 350,
      right: 0
   }
})