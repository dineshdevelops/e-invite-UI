import axios from 'axios'

const instance = axios.create({
    baseURL:"https://i-invite.onrender.com/api"
})

export default instance;