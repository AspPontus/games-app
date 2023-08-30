/* import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext' */

import LoginForm from "../Components/Forms/LoginForm"


function Login() {
/*   const emailRef:any = useRef()
  const passwordRef:any = useRef()
const [error, setError] = useState<string>('')
const navigate = useNavigate()
const { login } = useAuth();

    const handleSubmit = async (e) => {
       e.preventDefault();
       console.log(emailRef)
       setError('');
        await login(emailRef.current.value, passwordRef.current.value);
        
        navigate("/profile");
       try {
        
       } catch (err) {
        setTimeout(() => {setError('')}, 2500);
        return setError('Failed to log in');
       }
    }
       */

/*     const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    } */
    
  return (
    <div className="login-modal">
        <h2 className="login-title">Log in</h2>
        <LoginForm location={"login-page"}/>
    </div>
  )
}



export default Login