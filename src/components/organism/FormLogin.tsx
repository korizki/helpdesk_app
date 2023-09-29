import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Colors, Size } from "../../assets/styles"
import InputField from "../molecules/InputField"
import ButtonRed from "../atoms/ButtonRed"
import BasicText from "../atoms/BasicText"
import { useState } from "react"

export default function FormLogin({ processLogin }: any) {
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')
   return (
      <View style={style.formWrap}>
         <View style={style.headWrapper}>
            <Text style={[Colors.fontBlack, Size.xlg, style.title]}>User Authentication</Text>
            <BasicText isCenter={false} text="Please provide your login information." textColor={Colors.fontGrey} />
         </View>
         <InputField
            label="Username"
            bgColor={Colors.white}
            value={userName}
            placeholder="Type your NRP"
            isPassword={false}
            handleChange={setUserName}
         />
         <InputField
            bgColor={Colors.white}
            value={password}
            isPassword={true}
            label="Password"
            placeholder="Type your password"
            handleChange={setPassword}
         />
         <ButtonRed
            isWrapped={true}
            handlePress={() => processLogin(userName, password)}
         >
            <Text style={style.textButton}>Log In</Text>
         </ButtonRed>
         <TouchableOpacity activeOpacity={0.2} style={style.noAccount}>
            <BasicText
               text="Don't have account"
               textColor={Colors.fontRed}
               isCenter={true}
            />
         </TouchableOpacity>
      </View>
   )
}

const style = StyleSheet.create({
   title: {
      fontFamily: 'Quicksand-Bold'
   },
   headWrapper: {
      paddingTop: '0%',
      paddingBottom: '10%',
   },
   formWrap: {
      padding: '7%',
      paddingTop: '10%',
   },
   noAccount: {
      padding: 8,
      transform: [{ translateY: -8 }]
   },
   textButton: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Quicksand-Bold'
   },
})