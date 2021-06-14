import * as Location from "expo-location"

const teenMetersWithDegrees = 0.0001

const getLocation = (increment) => {
   return {
      timestamp: 1000000,
      coords: {
         speed: 0,
         heading: 0,
         accuracy: 5,
         altitudeAccuracy: 5,
         altitude: 5,
         longitude: -0.19496 + increment * teenMetersWithDegrees,
         latitude: 51.12965 + increment * teenMetersWithDegrees
      }
   }
}

let counter = 0

setInterval(() => {
   Location.EventEmitter.emit("Expo.locationChanged", {
      watchId: Location._getCurrentWatchId(),
      location: getLocation(counter)
   })
   counter++
}, 1000)
