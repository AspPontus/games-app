import logo from "../assets/GA-Whit.png"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const navigate = useNavigate()
    const {currentUser}:any =useAuth();

    const handleMenu = ():void => {
        const line = document.querySelector('.h-line');
        const hiddenNav = document.querySelector('.hidden-nav');
        if(line?.classList.contains('close')){
            (line as HTMLElement).classList.remove('close');
            (hiddenNav as HTMLElement).classList.remove('show');
        } else {
            (line as HTMLElement).classList.add('close');
            (hiddenNav as HTMLElement).classList.add('show');
        };
    };

    const handleNavigate = (loc:string) => {
        navigate("/" + loc);
    }

  return (
    <>
        <div className="header">
            <img className="m-logo" src={logo} alt="GA Logo" />
            <div className="h-menu" onClick={() => handleMenu()}>
            <div className="h-line"></div> 
            </div>
        </div>
        <nav className="hidden-nav">
            <ul>
                <li onClick={() => handleNavigate('login')}>Log in</li>
                <li onClick={() => handleNavigate(`profile/${currentUser.uid}`)}>Profile</li>
            </ul>
        </nav>
    </>
  )
}

export default Header