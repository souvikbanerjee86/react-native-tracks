import AsyncStorage from "@react-native-async-storage/async-storage"

import createDataContext from "./createDataContext"
import TrackerAPI from "../api/Tracker"
import { navigate } from "../NavigationRef"

const authReducer = (state, action) => {
   switch (action.type) {
      case "add_error":
         return { ...state, errorMessage: action.payload }
      case "signin":
         return { token: action.payload, errorMessage: "" }
      case "clear_error_message":
         return { token: "", errorMessage: "" }
      case "signout":
         return { token: null, errorMessage: "" }
      default:
         state
   }
}

const tryLocalSignin = (dispatch) => {
   return async () => {
      const token = await AsyncStorage.getItem("token")
      if (token) {
         dispatch({ type: "signin", payload: token })
         navigate("TrackList")
      } else {
         navigate("Signin")
      }
   }
}

const clearErrorMessage = (dispatch) => {
   return () => {
      dispatch({ type: "clear_error_message" })
   }
}

const signUp = (dispatch) => {
   return async ({ email, password }) => {
      try {
         const response = await TrackerAPI.post("/signup", {
            email: email,
            password: password
         })
         await AsyncStorage.setItem("token", response.data.token)
         dispatch({ type: "signin", payload: response.data.token })
         navigate("TrackList")
      } catch (e) {
         dispatch({
            type: "add_error",
            payload: "Something went wrong with signup"
         })
      }
   }
}

const signIn = (dispatch) => {
   return async ({ email, password }) => {
      try {
         const response = await TrackerAPI.post("/signin", {
            email: email,
            password: password
         })
         await AsyncStorage.setItem("token", response.data.token)
         dispatch({ type: "signin", payload: response.data.token })
         navigate("TrackList")
      } catch (e) {
         dispatch({
            type: "add_error",
            payload: "Something went wrong with signin"
         })
      }
   }
}

const signOut = (dispatch) => {
   return async () => {
      await AsyncStorage.removeItem("token")
      dispatch({ type: "signout" })
      navigate("Signin")
   }
}

export const { Provider, Context } = createDataContext(
   authReducer,
   { signIn, signUp, signOut, clearErrorMessage, tryLocalSignin },
   { token: null, errorMessage: "" }
)
