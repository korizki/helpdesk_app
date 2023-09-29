import { TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../assets/styles";

export default function ButtonRed({ children, handlePress }) {
   return (
      <TouchableOpacity
         activeOpacity={0.9}
         style={style.buttonWrap}
         onPress={handlePress}
      >
         {children}
      </TouchableOpacity>
   )
}

const style = StyleSheet.create({
   buttonWrap: {
      backgroundColor: Colors.red,
      width: '90%',
      marginBottom: '6%',
      marginHorizontal: '5%',
      padding: 16,
      borderRadius: 8,
   }
})