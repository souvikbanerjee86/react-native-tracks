//import "../_mockLocation"
import React, { useContext, useCallback } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { withNavigationFocus } from "react-navigation"
import { Text } from "react-native-elements"
import { FontAwesome } from "@expo/vector-icons"
import Map from "../components/Map"
import { Context as LocationContext } from "../context/locationContext"
import useLocation from "../hooks/useLocation"
import TrackForm from "./../components/trackForm"
const TrackCreateScreen = ({ isFocused }) => {
   const {
      state: { recording },
      addLocation
   } = useContext(LocationContext)
   const callback = useCallback(
      (location) => {
         addLocation(location, recording)
      },
      [recording]
   )
   const [err] = useLocation(isFocused || recording, callback)
   return (
      <SafeAreaView style={styles.container}>
         <Text h2>Create Track</Text>
         <Map />
         {err ? <Text>Please enable location services</Text> : null}
         <TrackForm />
      </SafeAreaView>
   )
}

TrackCreateScreen.navigationOptions = {
   title: "Add Track",
   tabBarIcon: <FontAwesome name="plus" size={24} color="black" />
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   }
})

export default withNavigationFocus(TrackCreateScreen)
