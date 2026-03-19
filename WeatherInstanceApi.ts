import axios from "axios";

export default axios.create({
  baseURL: "http://api.openweathermap.org",
  timeout: 1000,
  params: { appid: process.env.EXPO_PUBLIC_API_KEY },
});
