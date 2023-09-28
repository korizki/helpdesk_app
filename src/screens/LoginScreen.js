import { View, Text, TouchableOpacity } from "react-native"

export default function LoginScreen({ navigation }) {
   return (
      <View>
         <Text>You're in Login Screen</Text>
         <TouchableOpacity onPress={e => navigation.goBack()}>
            <Text>Kembali</Text>
         </TouchableOpacity>
      </View>
   )
}