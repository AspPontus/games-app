
import { useAuth } from "../../context/AuthContext"
import LoginForm from "../Forms/LoginForm";
import ReviewForm from "../Forms/ReviewForm";

function ReviewModal({setModal, game}) {
const { currentUser } = useAuth();

const handleClick = () => {
  setModal(false)
  /* window.location.reload(); */ //TO REFRESH STARS ON GAME PAGE
}

  return (
    <div className="modal-container">
        <div className="modal"> 
        <button className="close-modal" onClick={() => handleClick()}>X</button>
        <h1>{currentUser ? "Wriete your review": "Log In"}</h1>
        {currentUser ? <ReviewForm game={game}/> : <LoginForm location={"review-modal"}/>}
        </div>
    </div>
  )
}

export default ReviewModal