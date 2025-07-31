import axios from 'axios'

const api = axios.create({
    baseURL: 'https://academix-backend-o374.onrender.com/api',
    withCredentials: false
})

export default api