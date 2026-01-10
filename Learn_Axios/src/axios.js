import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://69401a4b993d68afba6afc4e.mockapi.io',
    responseType:'json',

})

export {axiosInstance}