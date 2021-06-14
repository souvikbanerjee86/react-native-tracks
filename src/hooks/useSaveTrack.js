import { useContext } from "react"
import { Context as TrackContext } from "../context/TrackContext"
import { Context as LocationContext } from "../context/locationContext"
import { navigate } from "../NavigationRef"
export default () => {
   const { createTrack } = useContext(TrackContext)
   const {
      reset,
      state: { name, locations }
   } = useContext(LocationContext)

   const saveTrack = async () => {
      await createTrack(name, locations)
      reset()
      navigate("TrackList")
   }

   return [saveTrack]
}
