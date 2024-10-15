import '../../ComponentStyles/BottomNav.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext' 

function Nav() {
  const { currentUser }:any = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (loc: string): void => {
   if (location.pathname === `${loc}`) return window.location.reload();
    navigate(loc);
  }

  return (
    <nav>
      <section onClick={() => handleNavigate(`/`)}>F</section>
      <section onClick={() => handleNavigate(`/discover_reviews`)}>R</section>
      <div className="post-btn">+</div>
      <section onClick={() => handleNavigate(`/discover_games`)}>G</section>
      <section onClick={currentUser ? () => handleNavigate(`/profile/${currentUser.uid}`) : () => handleNavigate(`/login`)}>P</section>
    </nav>
  )
}

export default Nav