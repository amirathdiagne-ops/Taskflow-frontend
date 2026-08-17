import { useState } from "react"
import { useAuth } from "../context/AuthContext"
function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erreur, setErreur] = useState(null)
    const [loadingLogin, setLoadingLogin] = useState(false)
    const {login} = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoadingLogin(true)
        try {
            
            await login(email, password)
            console.log("connecté avec succès")
            setEmail("")
            setPassword("")
        } catch (error) {
            setErreur(error.response?.data?.message || error.message)
        }finally{
            setLoadingLogin(false)
        }
    }
    return(
        <div>
            <h3>Ceci est la page de connexion</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Se connecté</button>
            </form>
        </div>
    )
}

export default LoginPage