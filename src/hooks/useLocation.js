import React, { useEffect, useState } from "react"
import {
   requestForegroundPermissionsAsync,
   watchPositionAsync,
   Accuracy
} from "expo-location"

export default (shouldTrack, callBack) => {
   const [err, setErr] = useState("")
   const [subscriber, setSubscriber] = useState(null)

   useEffect(() => {
      const startWatching = async () => {
         try {
            const { granted } = await requestForegroundPermissionsAsync()

            if (!granted) {
               throw new Error("Location permission not granted")
            }
            const sub = await watchPositionAsync(
               {
                  accuracy: Accuracy.BestForNavigation,
                  timeInterval: 1000,
                  distanceInterval: 10
               },
               (location) => {
                  callBack(location)
               }
            )
            setSubscriber(sub)
         } catch (e) {
            setErr(e)
         }
      }

      if (shouldTrack) {
         startWatching()
      } else {
         if (subscriber) {
            subscriber.remove()
         }
         setSubscriber(null)
      }
      return () => {
         if (subscriber) {
            subscriber.remove()
         }
      }
   }, [shouldTrack, callBack])

   return [err]
}
