import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL
export const Http = () => {
    const http = axios.create({
        baseURL: baseUrl
    })

    return http
}