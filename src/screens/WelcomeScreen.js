import { View, Text, Image, StatusBar, StyleSheet } from "react-native"
import { Colors, Size } from "../assets/styles"
import ButtonRed from "../components/atoms/ButtonRed"

export default function WelcomeScreen({ navigation }) {
   return (
      <View style={style.mainBackground}>
         <StatusBar
            backgroundColor={'white'}
            barStyle={"dark-content"}
         />
         <View style={style.centerContent}>
            <Image
               style={style.topImage}
               source={require('../assets/images/welcome.png')}
               resizeMode={"contain"}
            />
            <Text style={[Colors.fontRed, Size.xlg, style.title]}>Welcome to Helpdesk</Text>
            <Text style={[Colors.fontGrey, Size.lg, style.basic]}>Report any problem, gets quick solutions</Text>
         </View>
         <ButtonRed handlePress={e => navigation.navigate('Login')}>
            <Text style={style.textButton}> Get Started </Text>
         </ButtonRed>
      </View>
   )
}

const style = StyleSheet.create({
   basic: {
      fontFamily: 'Quicksand-Medium'
   },
   topImage: {
      width: '100%',
      height: '45%',
      marginVertical: '18%'
   },
   title: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: '600',
      marginBottom: 16,
   },
   centerContent: {
      height: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   mainBackground: {
      backgroundColor: Colors.white,
      width: '100%',
      height: '100%',
      justifyContent: 'space-between'
   },
   textButton: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Quicksand-Bold'
   },
})