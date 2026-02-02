import { tokenStorage } from "@/app/utils/storage";
import type { AxiosInstance } from "axios";
import Axios from "axios";



export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  (process.env.NEXT_PUBLIC_DEV_API_BASE_URL as string);

export const axiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAxiosDefaultToken = (
  token: string,
  axiosInstance: AxiosInstance
) => {
  localStorage.setItem("token", token);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAxiosDefaultToken = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};
