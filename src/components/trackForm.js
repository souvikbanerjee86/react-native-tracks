import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"
import { Context as LocationContext } from "../context/locationContext"
import Spacer from "./Spacer"
import useSaveTrack from "../hooks/useSaveTrack"
const TrackForm = () => {
   const [saveTrack] = useSaveTrack()
   const {
      startRecording,
      stopRecording,
      changeName,
      state: { name, recording, locations }
   } = useContext(LocationContext)
   return (
      <>
         <Input
            placeholder="Enter name"
            value={name}
            onChangeText={(text) => changeName(text)}
         />

         {recording ? (
            <Button title="Stop" onPress={stopRecording} />
         ) : (
            <Button title="Start Recording" onPress={startRecording} />
         )}
         <Spacer />
         {!recording && locations.length > 0 ? (
            <Button title="Save Recording" onPress={saveTrack} />
         ) : null}
      </>
   )
}

const styles = StyleSheet.create({})

export default TrackForm
