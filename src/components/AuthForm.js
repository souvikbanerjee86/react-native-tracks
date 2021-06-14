import React, { useState, useContext } from "react"
import { StyleSheet, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { Input, Text, Button } from "react-native-elements"
import Spacer from "./Spacer"

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   return (
      <>
         <Spacer>
            <Text h3>{headerText}</Text>
         </Spacer>
         <Input
            label="Email"
            placeholder="Enter Email"
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            autoCapitalize="none"
            autoCorrect={false}
            leftIcon={<FontAwesome name="envelope" size={20} color="black" />}
         />
         <Input
            secureTextEntry={true}
            label="Password"
            placeholder="Enter Password"
            leftIcon={<FontAwesome name="lock" size={24} color="black" />}
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            autoCapitalize="none"
            autoCorrect={false}
         />
         {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
         ) : null}
         <Spacer>
            <Button
               title={buttonText}
               onPress={() => onSubmit({ email, password })}
            />
         </Spacer>
      </>
   )
}

const styles = StyleSheet.create({
   errorMessage: {
      fontSize: 16,
      color: "red",
      marginLeft: 16
   }
})

export default AuthForm
