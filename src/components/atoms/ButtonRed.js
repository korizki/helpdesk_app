import { TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../assets/styles";

export default function ButtonRed({ children, handlePress, isWrapped }) {
   return (
      <TouchableOpacity
         activeOpacity={0.9}
         style={[style.buttonWrap, !isWrapped ? style.buttonPadding : false]}
         onPress={handlePress}
      >
         {children}
      </TouchableOpacity>
   )
}

const style = StyleSheet.create({
   buttonWrap: {
      backgroundColor: Colors.red,
      width: '100%',
      marginVertical: '5%',
      padding: 16,
      borderRadius: 8,
   },
   buttonPadding: {
      width: '86%',
      marginHorizontal: '7%',
   }
})