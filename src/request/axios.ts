import axios, { AxiosRequestConfig } from "axios";
import { Response } from '../type'

// baseUrl production环境下会变
const instance = axios.create({
    baseURL: "/api",
    timeout: 5000
})

instance.interceptors.response.use((res) => {
    console.log(`request ${res.config.url} success, the status is ${res.status}`);
    return res.data;
}, (err) => {
    console.log(err);
    return {
        data: null,
        status: 400,
        err
    }
})


export const httpGet: <T>(url: string, config?: AxiosRequestConfig) => Promise<Response<T>> = instance.get;
export const httpPost: <T>(url: string, config?: AxiosRequestConfig) => Promise<Response<T>> = instance.post;

