import { View, Text, TouchableOpacity, StatusBar } from "react-native"

export default function WelcomeScreen({ navigation }) {
   return (
      <View>
         <StatusBar backgroundColor={'crimson'} />
         <Text>You're in Home Screen</Text>
         <TouchableOpacity onPress={e => navigation.navigate('Login')}>
            <Text>Login</Text>
         </TouchableOpacity>
      </View>
   )
}