import { View, Text, Image, StatusBar, StyleSheet } from "react-native"
import { Colors, Size } from "../assets/styles"
import ButtonRed from "../components/atoms/ButtonRed"
import BasicText from "../components/atoms/BasicText"

export default function WelcomeScreen({ navigation }: any) {
   return (
      <View style={style.mainBackground}>
         <StatusBar
            backgroundColor={Colors.bgBlue}
            barStyle={"dark-content"}
         />
         <View style={style.centerContent}>
            <Image
               style={style.topImage}
               source={require('../assets/images/welcome.png')}
               resizeMode={"contain"}
            />
            <Text style={[Colors.fontBlack, Size.xlg, style.title]}>Welcome to <Text style={Colors.fontRed}>Helpdesk</Text></Text>
            <BasicText
               isCenter={false}
               text="Report any problem and get quick solutions."
               textColor={Colors.fontGrey}
            ></BasicText>
         </View>
         <ButtonRed isWrapped={false} handlePress={() => navigation.navigate('Login')}>
            <Text style={style.textButton}> Get Started </Text>
         </ButtonRed>
      </View>
   )
}

const style = StyleSheet.create({
   topImage: {
      width: '100%',
      height: '45%',
      marginVertical: '18%'
   },
   title: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: '600',
      marginBottom: 20,
   },
   centerContent: {
      height: '90%',
      paddingHorizontal: '5%',
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   mainBackground: {
      backgroundColor: Colors.bgBlue,
      width: '100%',
      height: '100%',
      paddingBottom: '5%',
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