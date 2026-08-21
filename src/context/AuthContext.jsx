import { useEffect, useContext, useState, createContext } from "react";
import API from "../services/api";
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [erreur, setErreur] = useState(null)
    const [accessToken, setAccessToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhODU5ZWJlMDQ4MjAxZDFlNTJjMmYzNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzg3MjkyMzE0LCJleHAiOjE3ODczNzg3MTR9.vjelnt_bcr4rQoQkJQ21wyfvk7xHG7ZNN6D384Wbu9o")
    const login = async (email, password) => {
        try {
            const response = await API.post('/auth/login', { email, password })
            const { user: userData, accessToken: newAccessToken } = response.data
            setUser(userData)
            setAccessToken(newAccessToken)
            localStorage.setItem('accessToken', newAccessToken)
            return true
        } catch (error) {
            console.error('Erreur lors de la connexion', error.response?.data?.message || error.message)
            throw error
        }
    }

    const register = async (name, email, password) => {
        try {
            const response = await API.post('/auth/register')
            const { user: userData, accessToken: newAccessToken } = response.data
            setUser(userData)
            setAccessToken(newAccessToken)
            localStorage.setItem('accessToken', newAccessToken)
        } catch (error) {
            console.error('Erreur lors de l\'inscription', error.response?.data?.message || error.message)
        }
    }
    const logout = async () => {
        try {
            const response = await API.post('/auth/logout')
            setUser(null)
            setAccessToken(null)
            localStorage.removeItem('accessToken')

        } catch (error) {
            console.error('Erreur lors de la deconnexion', error.response?.data?.message || error.message)
        }
    }
    const refreshAccessToken = async () => {
        try {
            const response = await API.post('/auth/refresh')
            const { accessToken: newAccessToken } = response.data
            return newAccessToken
        } catch (error) {
            console.error('Erreur lors du rafraichissement du token', error.response?.data?.message || error.message)
            throw error
        }
    }
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const newAccessToken = await refreshAccessToken()
                const response = await API.get('/auth/me', {
                    headers : {
                        Authorization : `Bearer ${newAccessToken}`
                    }
                })
                const { user : userData} = response.data
                setUser(userData)
                console.log(response.data.user)
            } catch (error) {
                setUser(null)
                setAccessToken(null)
            } finally {
                setLoading(false)
            }

        }
        checkAuth()
    }, [])
    useEffect(() => {
        const requestInterceptors = API.interceptors.request.use(
            (config) => {
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`
                }
                return config
            },
            (error) => Promise.reject(error)
        )
        const responseInterceptors = API.interceptors.response.use( 
            (response) => response,
            async (error) => {
                const originalRequest = error.config
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true
                    try {
                        const accessToken = await refreshAccessToken() 
                        originalRequest.headers.Authorization = `Bearer ${accessToken}`
                        return API(originalRequest)
                    } catch (refreshError) {
                        console.log('erreur du refresh lors de linteceptors')
                        return Promise.reject(refreshError)
                    }
                }
                return Promise.reject(error)
            }
        )
        return () => {
            API.interceptors.request.eject(requestInterceptors)
            API.interceptors.response.eject(responseInterceptors)
        }
    }, [accessToken])

    const authContextValue = {
        user,
        accessToken,
        loading,
        login,
        logout,
        register
    }

    return <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
}
export const useAuth = () => {
    return useContext(AuthContext)
}