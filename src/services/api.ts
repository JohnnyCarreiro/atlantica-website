import axios from 'axios'

const api = axios.create({
    baseURL:'http://104.131.113.105:3333'
})

export default api