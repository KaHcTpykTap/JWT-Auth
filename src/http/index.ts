import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = "https://sensationnel-chaise-20290.herokuapp.com/api";

/* export const API_URL = "http://localhost:3000/"; */

const $api = axios.create({
  /* cookies auto set to axios */
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: any) => {
  if(localStorage.getItem("token")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  } 
  return config;
});

$api.interceptors.response.use(
  (config) => {    
    return config;
  },
  async (error) => {
    console.log("Type of");
    
    console.log(typeof error);
    
    const originalRequest = error.config;
    console.log(error.config);
    
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest)
        
      } catch (error) {
        console.log("User not authorized");
      }
    }
    throw error;
  }
);

export default $api;
