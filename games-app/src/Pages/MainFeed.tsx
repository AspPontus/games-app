import { useEffect, useState } from "react"
import LazyLoadingReviews from "../Components/LazyLoadingReviews"
import Nav from "../Components/utils/Nav"
import { useAuth } from "../context/AuthContext"

function MainFeed() {
  /* const {currentUser}:any = useAuth();
  const [feed, setFeed] = useState<any>();

  const fetchFeed = async () => {
    const api = await fetch(`http://localhost:3000/api/user/feed/${currentUser.uid}`)
    const data = await api.json();
    console.log(data)
  } */
  
  useEffect(() => {
    /* fetchFeed(); */
    console.log('test runtime');
  }, [])
  return (
    <div>
        MainFeed
        <LazyLoadingReviews />
        <Nav />
    </div>
  )
}

export default MainFeed