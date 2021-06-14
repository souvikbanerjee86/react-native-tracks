import React, { useContext } from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"
import { Button } from "react-native-elements"
import Spacer from "./../components/Spacer"
import { Context as AuthContext } from "../context/authContext"
import { FontAwesome } from "@expo/vector-icons"
const AccountScreen = () => {
   const { signOut } = useContext(AuthContext)
   return (
      <SafeAreaView style={styles.container}>
         <Text style={{ fontSize: 48 }}>AccountScreen</Text>
         <Spacer>
            <Button title="Signout" onPress={signOut} />
         </Spacer>
      </SafeAreaView>
   )
}
AccountScreen.navigationOptions = {
   title: "Account",
   tabBarIcon: <FontAwesome name="gears" size={24} color="black" />
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   }
})

export default AccountScreen
