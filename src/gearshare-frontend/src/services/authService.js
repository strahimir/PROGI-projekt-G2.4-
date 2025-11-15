import api from '../api/axios'
import axios from 'axios'


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const loginWithGoogle = () => {

    window.location.href = `${BACKEND_URL}/login/oauth2/authorization/google`
}


export const getCurrentUser = async () => {

    try {
        const response = await api.get('/me')

        return response.data || null
    } catch (error) {
        console.error("Failed to fetch current user: ", error)
        return null
    }

}


export const logout = async () => {
    try {
        await axios.post(`${BACKEND_URL}/logout`, {}, { withCredentials: true })
    } catch (error) {
        if (error.code !== 'ERR_NETWORK') throw error;
    } finally {
        // clear user state and redirect anyway
        window.location.href = '/welcome';
    }
}