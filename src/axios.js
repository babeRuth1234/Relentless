import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + '/api/productsOp', // change this to your backend URL
  withCredentials: false, // true if you're dealing with cookies/sessions
})

// Optional: Add token to every request automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default API
