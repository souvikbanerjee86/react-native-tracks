import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
const instance = axios.create({
   baseURL: "http://eabc20c96e0a.ngrok.io"
})

instance.interceptors.request.use(
   async (config) => {
      const token = await AsyncStorage.getItem("token")
      if (token) {
         config.headers.Authorization = `Bearer ${token}`
      }
      return config
   },
   (err) => {
      return Promise.reject(err)
   }
)

export default instance
