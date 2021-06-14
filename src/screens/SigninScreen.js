import React, { useContext } from "react"
import { View, StyleSheet } from "react-native"
import { NavigationEvents } from "react-navigation"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"
import { Context as AuthContext } from "../context/authContext"
const SigninScreen = ({ navigation }) => {
   const { state, signIn, clearErrorMessage } = useContext(AuthContext)

   return (
      <View style={styles.container}>
         <NavigationEvents onWillFocus={clearErrorMessage} />
         <AuthForm
            buttonText="Sign In"
            errorMessage={state.errorMessage}
            headerText="Sign In for Tracker"
            onSubmit={signIn}
         />
         <NavLink
            text="Don't have an account? Sign Up Instead!"
            routeName="Signup"
         />
      </View>
   )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen
