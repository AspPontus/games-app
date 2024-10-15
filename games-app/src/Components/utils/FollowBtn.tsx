import { handleFollow, handleUnFollow } from "./GlobalFunctions"
import { useAuth } from "../../context/AuthContext"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function FollowBtn({user, followers, setFollowers}) {
    const [followingState, setFollowingState] = useState(false)
    const [loading, setLoading] = useState(true)
    const { currentUser }:any = useAuth()
    const params = useParams();

    const fetchFollwoing = async () => {
        const api = await fetch(`http://localhost:3000/api/users/${currentUser.uid}`)
        const response = await api.json()
        response.following.map(following => {
            if(following.userId === params.id) {
                setFollowingState(true)
                setLoading(false)
            } else {
                setLoading(false)
            }
        })
        setLoading(false)
    }

    useEffect(() => {
        fetchFollwoing() 
    }, [])


  return (
    <>
    {loading ? 
    <button className="user-settings user-following">Loading...</button> :
    followingState ? 
        <button className="user-settings user-following" onClick={() => {
            handleUnFollow(currentUser, user) 
            setFollowingState(false)
            setFollowers(followers - 1)
        }}>Following</button> : 
        <button className="user-settings user-follow" onClick={() => {
            handleFollow(currentUser, user)
            setFollowingState(true)
            setFollowers(followers + 1)
        }}>Follow</button>
      }
    </>
  )
}

export default FollowBtn