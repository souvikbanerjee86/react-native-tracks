import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { withNavigation } from "react-navigation"
import { Text } from "react-native-elements"
import Spacer from "./Spacer"

const NavLink = ({ navigation, text, routeName }) => {
   return (
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
         <Spacer>
            <Text style={styles.link}>{text}</Text>
         </Spacer>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   link: {
      color: "blue"
   }
})

export default withNavigation(NavLink)
