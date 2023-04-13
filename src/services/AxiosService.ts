import axios from 'axios'
import type { AxiosInstance } from 'axios'


const api: AxiosInstance = axios.create({
    baseURL: 'https://ncc-channel-utilization-api.herokuapp.com/api/v1'

})


export default api