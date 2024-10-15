import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useParams } from "react-router-dom"
import FollowBtn from "./utils/FollowBtn";

function CurrentUserInfo({id}) {
    const [profileCat, setProfileCat] = useState(true)
    const [user, setUser] = useState<any>(null);
    const [followers, setFollowers] = useState<number>(0);
    const [reviews, setReviews] = useState<any>({});
    const {currentUser}:any = useAuth();
    const params = useParams();

    const fetchUser = async () => {
        const api = await fetch(`http://localhost:3000/api/users/${params.id}`);
        const response = await api.json()
        setUser(response)
        setFollowers(response.followers.length)
    }

    const fetchUserReviews = async () => {
        const api = await fetch(`http://localhost:3000/api/user/${id}/reviews`)
        const data = await api.json()
        setReviews(data)
    }


    useEffect(() => {
        fetchUser()
        fetchUserReviews()
        if(id === currentUser.uid) {
            setProfileCat(true)
        } else {
            setProfileCat(false)
        }
    }, [])

  return (
    <section className="user-info">
        <div className="profile-img">
            <img src="" alt="" />
        </div>
        <h2 className="username">{profileCat ? currentUser.username : user?.username}</h2>
        <div className="user-stats">
            <div className="user-stat">
                <h5>Reviews</h5>
                <div className="posts">{reviews.length}</div>
            </div>
            <div className="user-stat">
                <h5>Following</h5>
                <div className="following">{user?.following.length}</div>
            </div>
            <div className="user-stat">
                <h5>Followers</h5>
                <div className="followers">{followers}</div>
            </div>
        </div>
        {profileCat ? <button className="user-settings">Settings</button> : <FollowBtn user={user} followers={followers} setFollowers={setFollowers} />}
        
    </section>
  )
}

export default CurrentUserInfo