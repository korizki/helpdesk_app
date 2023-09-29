import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { Colors, Size } from "../../assets/styles"
import { useState } from "react"
export default function InputField({ value, label, isPassword, placeholder, handleChange, bgColor }) {
   const [showPassword, setShowPassword] = useState(false)
   return (
      <View>
         <Text style={[style.labelInpElement, Size.md]}>{label}</Text>
         <TextInput
            style={[style.inputElem, Size.md, { backgroundColor: bgColor }]}
            placeholder={placeholder}
            onChangeText={handleChange}
            value={value}
            secureTextEntry={isPassword && !showPassword}
         />
         {
            isPassword && value != '' ? (
               <TouchableOpacity
                  onPress={e => setShowPassword(!showPassword)}
                  activeOpacity={0.6}
               >
                  <Text style={[style.showPwText, Size.sm]}>{!showPassword ? 'Show' : 'Hide'} Password</Text>
               </TouchableOpacity>
            ) : false
         }
      </View>
   )
}

const style = StyleSheet.create({
   showPwText: {
      fontFamily: 'Quicksand-Medium',
      paddingBottom: 8,
      color: Colors.red,
      textAlign: 'right'
   },
   inputElem: {
      borderWidth: 1,
      borderColor: Colors.borderColor,
      padding: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      marginTop: 6,
      color: Colors.grey,
      marginBottom: 16,
   },
   labelInpElement: {
      fontFamily: 'Quicksand-SemiBold',
      color: Colors.grey,
   },
})