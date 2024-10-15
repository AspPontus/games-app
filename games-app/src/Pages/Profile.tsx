import { useParams } from "react-router-dom";
import CurrentUserInfo from "../Components/CurrentUserInfo";
import UserMadeReviews from "../Components/UserMadeReviews";
import Nav from "../Components/utils/Nav";
import UserContentSelector from "../Components/UserContentSelector";

function Profile() { 
  const params = useParams();

  return (
    <div>
      <CurrentUserInfo id={params.id}/>
      <UserContentSelector />
      <UserMadeReviews id={params.id}/>
      <Nav />
    </div>
  )
}

export default Profile