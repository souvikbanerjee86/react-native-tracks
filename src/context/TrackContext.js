import createDataContext from "./createDataContext"
import TrackerAPI from "../api/Tracker"
const trackReducer = (state, action) => {
   switch (action.type) {
      case "fetch_tracks":
         return action.payload

      default:
         return state
   }
}

const fetchTracks = (dispatch) => {
   return async () => {
      const response = await TrackerAPI.get("/tracks")
      dispatch({ type: "fetch_tracks", payload: response.data })
   }
}

const createTrack = (dispatch) => {
   return async (name, locations) => {
      await TrackerAPI.post("/tracks", { name: name, locations: locations })
   }
}

export const { Context, Provider } = createDataContext(
   trackReducer,
   { fetchTracks, createTrack },
   []
)
