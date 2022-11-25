import axios from 'axios'

const instance = axios.create({
    baseURL:"https://i-invite.onrender.com"
})

export default instance;