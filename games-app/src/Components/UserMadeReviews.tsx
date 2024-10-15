import { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import "../ComponentStyles/CompactReview.css"
import Vote from './Vote'

function UserMadeReviews({id}) {
    const [reviews, setReviews] = useState<any>()

    const fetchUserReviews = async () => {
        const api = await fetch(`http://localhost:3000/api/user/${id}/reviews`)
        const data = await api.json()
        console.log(data)
        setReviews(data)
    }

    const handleReviewStars = (amount:number) => {
        const stars:any = [];
        for(let i = 1; i <= amount; i++) {
          stars.push(<AiFillStar key={i} /> ) 
          
        }
        return stars
      }

      const accordion = document.querySelectorAll('.profile-review-feed');

      const reset = () => {
        accordion.forEach(review => {
            if(review.classList.contains('active')) {
                review.classList.remove('active')
            }
        })
      };

      accordion.forEach(review => {
        review.addEventListener('click', () => {
            reset()
            review.classList.add('active')
        })
      });


    useEffect(() => {
        fetchUserReviews();
    }, [])

  return (
    <>
    {reviews?.map((review) => {
        return(
            <div className='profile-review-feed' >
              <div className="vertical-stack">
                <div className="review-game-user-info">
                  <img className='game-poster' src={review.game_poster?.replace('w=177&h=177', 'w=600&h=600')} alt="" />
                  
                    <div className="title-rating">
                      <h2 className='game-review-title'>{review.game_title}</h2>
                      <div>{handleReviewStars(review.stars)}</div>
                      <h3 className="user-review-title">{review.title}</h3>
                    </div>
                    
                </div>
                <p className='profile-review'>{review.review}</p>
              </div>
              
              <Vote review={review} />

                {/* <div className='game-info'>
                  <div className="left-review-col">
                  <img className='game-poster' src={review.game_poster?.replace('w=177&h=177', 'w=600&h=600')} alt="" />
                    <div className='title-rating'>
                        <h2 className='game-review-title'>{review.game_title}</h2>
                        <div>{handleReviewStars(review.stars)}</div>
                        <h3 className="user-review-title">{review.title}</h3>
                    </div>
                    <p className='profile-review'>{review.review}</p>
                  </div>
                    
                    <Vote review={review} />
                </div> */}
            </div>
        )
    })}
    </>
  )
}

export default UserMadeReviews