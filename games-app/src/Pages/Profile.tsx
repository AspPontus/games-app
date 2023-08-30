import { useNavigate } from "react-router-dom"
import {useAuth} from '../context/AuthContext'

function Profile() { 
    const navigate = useNavigate();
    const {currentUser}:any = useAuth();
    console.log(currentUser)


    const handleLogout = () => {
        sessionStorage.removeItem('user')
        navigate("/")
    }

  return (
    <div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={() => handleLogout()}>Log out</button>
    </div>
  )
}

export default Profile