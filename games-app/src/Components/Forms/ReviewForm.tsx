import { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import StarRating from '../StarRating';
import { useParams } from 'react-router-dom'

function ReviewForm({game, setModal}) {
  const [loading, setLoading] = useState(false);
  const { currentUser }:any = useAuth();
  const reviewTitleRef:any = useRef();
  const reviewRef:any = useRef();
  const params = useParams()

  //figure out purpose of reviewId

  /* INTERNAL GAME PLAN:
      longterm: create a follow feature for users where you can view 
      other users recent reviews and updates on games.
      reviews only exist as a subset of the each game document (this will 
      create problems). Each review also gets a referance in the authors
      document. The feed will bring in all followed users reviews (limited 
      and by date). 

      Thought: should you be able to upvote and downvote reviews?

      We need to move the reviews away from the game document in order to
      accomodate for games being removed from the server

      idea: 
      reviews will be moved to a new separate collection (scraper issues)
      reviews will then instead store a referance to the game and user
      and be loaded in
  */
  const handleCharCount = (e) => {
    const charCount:number = e.target.value.split('').length;
    console.log(e.target.value.split('').length)
    if(charCount > 400){
    }
  }

  console.log(game)
  const handleSubmit = async () => {
    setLoading(true)
    if(reviewTitleRef.length > 50) return console.error('too long title')
    if (!currentUser) return;
      const api = await fetch(`http://localhost:3000/api/users/${currentUser.uid}/stars/${params.id}`)
      const data = await api.json();


      const post = await fetch(`http://localhost:3000/api/game/${params.id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          uid: currentUser.uid, 
          username: currentUser.username, 
          title: reviewTitleRef.current.value, 
          review: reviewRef.current.value, 
          game_title: game.title,
          game_poster: game.poster_img,
          stars: data.stars, 
          vote: 0,
          game_id: data.game,
          date: new Date()
        })
      })
      const response = await post.json()
      setLoading(false)
      setModal(false)
      console.log(response)
    
      console.log({
        uid: currentUser.uid, 
        username: currentUser.username, 
        title: reviewTitleRef.current.value, 
        review: reviewRef.current.value, 
        stars: data.stars, 
        game_id: data.game,
        createdAt: new Date()
      })
  }

  return (
    <>
  <div className={loading ? 'loader active' : 'loader'}>
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
        </div>
    <div className='review-form'>    
      <div className="header-write-review">
        <h2>{currentUser.username}</h2>
          {/* add game id-prop */}
        <StarRating game={game} modal={true}/>
      </div>
      
      <div className="review-input-container">
        <h3>Title:</h3>
        <input type="text" className='review-title' name='title' ref={reviewTitleRef}/>
      </div>
      <div className="review-input-container">
        <h3>Review:</h3>
        <textarea 
        name="review" 
        id="review-text-feild" 
        cols={50} 
        rows={10}
        onChange={(e) => handleCharCount(e)}
        ref={reviewRef}>
        </textarea>
      </div>
      <input 
      type="submit" 
      className='gradient-button send-review' 
      value={"Send review!"} 
      onClick={handleSubmit}/>
    </div>
    </>
  )
}

export default ReviewForm