import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"

import { Context as AuthContext } from "../context/authContext"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import { NavigationEvents } from "react-navigation"

const SignupScreen = ({ navigation }) => {
   const { state, signUp, clearErrorMessage } = useContext(AuthContext)

   return (
      <View style={styles.container}>
         <NavigationEvents onWillFocus={clearErrorMessage} />
         <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            onSubmit={signUp}
            buttonText="Sign Up"
         />
         <NavLink
            text="Already have an account? Sign In Instead!"
            routeName="Signin"
         />
      </View>
   )
}

SignupScreen.navigationOptions = () => {
   return {
      headerShown: false
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center"
   }
})

export default SignupScreen
