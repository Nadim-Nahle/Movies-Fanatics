import axios from "axios";
const BASE_URL = "https://movies-fanatics-backend.vercel.app/api/v1/auth";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
