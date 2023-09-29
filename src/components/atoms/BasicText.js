import { Text, StyleSheet } from "react-native";
import { Colors, Size } from "../../assets/styles";

export default function BasicText({ text, textColor, isCenter }) {
   return (
      <Text style={[textColor, Size.md, style.basic, isCenter ? style.center : false]}>{text}</Text>
   )
}
const style = StyleSheet.create({
   basic: {
      fontFamily: 'Quicksand-Medium',
      lineHeight: 28,
   },
   center: {
      textAlign: 'center'
   }
})