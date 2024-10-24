import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://logistic-app-backend.onrender.com",
  //   timeout: 1000,
  headers: { token: localStorage["token"] },
});
export default axiosInstance;
