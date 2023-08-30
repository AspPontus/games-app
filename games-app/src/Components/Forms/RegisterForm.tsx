import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'

function RegisterForm() {
    const emailRef:any = useRef();
    const usernameRef:any = useRef();
    const passwordRef:any = useRef();
    const confirmPasswordRef:any = useRef();
    const [error, setError] = useState<string>('')
    const { register } = useAuth()
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
     try{
        setError('');
        await register(emailRef.current.value, usernameRef.current.value, passwordRef.current.value, confirmPasswordRef.current.value);
        navigate("/profile");
     } catch (err) {
        setTimeout(() => {setError('')}, 2500);
        return setError('Failed to log in');
     }
  }
  
  return (
    <form action="login">
    <div className="input-login">
       <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" ref={emailRef} /> 
    </div>
    <div className="input-login">
       <label htmlFor="email">Username</label>
        <input type="email" name="email" id="username" ref={usernameRef} /> 
    </div>
    <div className="input-login">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" ref={passwordRef} /> 
    </div>
    <div className="input-login">
        <label htmlFor="password">Conrifm Password</label>
        <input type="password" name="password" id="confirm-password" ref={confirmPasswordRef} /> 
    </div>
    <input type="submit" value="Register" name="submit" id="submit" onClick={(e) => {handleSubmit(e)}}/>
    <Link to={"/register"} className="to-register">Create an account!</Link>
</form>
  )
}

export default RegisterForm