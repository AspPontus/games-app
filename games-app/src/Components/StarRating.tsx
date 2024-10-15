import { AiFillStar } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useParams } from 'react-router-dom';


function StarRating({ game, modal }) {
  const [rating, setRating] = useState<number>(0);
  const { currentUser }:any = useAuth();
  const params = useParams();

  //User has to be logged in to star a game............[X]
  //Check stars with API call maybe with useEffect.....[X]
  //Load already strred stars..........................[X]
  //Create new stars when Game isnt already starred....[X]
  //Backend saves multiple null games to db bug........[X]
  //Update stars when modal is closed..................[]
  //Update stars saving to the wrong user..............[X]
  //Login from write review button causes err..........[X]
  //No star rating err fix.............................[]
  //Test everything....................................[]
  
 
  const postStars = async (value) => {
    await fetch(`http://localhost:3000/api/users/${currentUser.uid}/stars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify({
        game_id: game._id,
        value
      })
    })
  }


  const fetchPersonalRating = async () => {
    if (!currentUser) return;
    const api = await fetch(`http://localhost:3000/api/users/${currentUser.uid}/stars/${params.id}`)
    const data = await api.json();
    setRating(data.stars)
  }


  const handleClick = (value) => {
     if (!currentUser) {
      console.warn('PLACE AN ERROR')
      console.error('MUST LOGIN TO STAR RATE A GAME!')
     } else {
      setRating(value);
      postStars(value);
     }
  } 

  //runs on close modal
  if(!modal) {
    fetchPersonalRating();
  }

  useEffect(() => {
    fetchPersonalRating();
  }, [game._id, currentUser])
  
 
  return (
    <div> 
      {[...Array(5)].map((star ,i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <AiFillStar
              className='star'
              fill={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
              size={35}
            />
          </label>)
      })}
    </div>
  )
}

export default StarRating