import axios from 'axios'

const API = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials : true,
    timeout :10000
})

export default API