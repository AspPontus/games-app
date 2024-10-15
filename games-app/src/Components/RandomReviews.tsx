import Nav from "../Components/utils/Nav"
import Vote from "../Components/Vote";
import "../ComponentStyles/CompactReview.css"
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

function RandomReviews({reviews}) {
    const navigate = useNavigate();
  
    const handleReviewStars = (amount:number) => {
      const stars:any = [];
      for(let i = 1; i <= amount; i++) {
        stars.push(<AiFillStar key={i} /> ) 
        
      }
      return stars
    }
  
    const handleClick = (uid) => {
      navigate(`/profile/${uid}`)
    }

    /* animation 602 app.css */
    /* setTimeout(() => {
        const test = Array.from(document.querySelectorAll('.game-info'))
        test.map(item => {
            const animate = item as HTMLElement
            animate.style.transform = 'unset'
        })
    }, 200); */
  
    return (
      <div>
        {reviews?.map((review, ind) => {
                   return(
                    <div className='profile-review-feed' key={ind}>
                      <div className="vertical-stack">
                        <div className="review-game-user-info">
                          <img className='game-poster' src={review.game_poster?.replace('w=177&h=177', 'w=600&h=600')} alt="" />
                          
                            <div className="title-rating">
                              <h2 className='game-review-title'>{review.game_title}</h2>
                              <div>{handleReviewStars(review.stars)}</div>
                              <p className="review-username-disc" onClick={() => handleClick(review.uid)}>@{review.username}</p>
                              <h3 className="user-review-title">{review.title}</h3>
                            </div>
                            
                        </div>
                        <p className='profile-review'>{review.review}</p>
                      </div>
                      
                      <Vote review={review} />

                    {/* <div className='profile-review-feed'key={ind} 
                     >
                        <div className='game-info'>
                            <img className='game-poster' src={review.game_poster?.replace('w=177&h=177', 'w=600&h=600')} alt="" />
                            <div className='title-rating'>
                                <h2 className='game-review-title'>{review.game_title}</h2>
                                  <div>{handleReviewStars(review.stars)}</div>
                                  <p className="review-username-disc" onClick={() => handleClick(review.uid)}>@{review.username}</p>
                                <h3 className="user-review-title">{review.title}</h3>
                                
                            </div>
                            <Vote review={review} />
                        </div>
                        <p className='profile-review'>{review.review}</p> */}
                    </div>
                ) 
        })} 
        <Nav />
      </div>
    )
  }
  
export default RandomReviews