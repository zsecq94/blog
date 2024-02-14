import axios from "axios";

export const BASE_URL = "http://localhost:3000/";

const TIME_OUT = 5000;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

// export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
