import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from '../../context/AuthContext'
import { fetchPersonalRating } from '../../context/fetchUserStars';
import { useParams } from 'react-router-dom'


function LoginForm({ location }) {
  const emailRef:any = useRef()
  const passwordRef:any = useRef()
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const { login, currentUser }:any = useAuth();
  const params = useParams()

  console.log(location)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emailRef)
        try {
          setError('');
          await login(emailRef.current.value, passwordRef.current.value);
          if (location === "login-page") {
            navigate("/profile");
          } else {
            // try to get this to only run fetchPersonalRating instead
            /* window.location.reload(); */
            /* fetchPersonalRating(currentUser.userId, params.id) */
          }
          
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
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" ref={passwordRef} /> 
        </div>
        <input type="submit" value="Log in" name="submit" id="submit" onClick={(e) => {handleSubmit(e)}}/>
        <Link to={"/register"} className="to-register">Create an account!</Link>
    </form>
  )
}

export default LoginForm