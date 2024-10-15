import {useState, useEffect} from 'react'
/* import { useParams } from 'react-router-dom'; */
import { AiFillStar } from 'react-icons/ai'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import ReviewModalRead from './Modals/ReviewModalRead';

function Reviews({id}) {
    const [gameReviews, setGameReviews] = useState<any>([]);
    const [reviewObj, setReviewObj] = useState()

    const fetchGame = async () => {
        const api = await fetch(`http://localhost:3000/api/game/${id}/reviews`);
        const data = await api.json();
        console.log(data)
        setGameReviews(data)
        
    }

    const handleReviewStars = (amount:number) => {
        const stars:any = [];
        for(let i = 1; i <= amount; i++) {
          stars.push(<AiFillStar key={i} /> ) 
          
        }
        return stars
      }


      

    useEffect(() => {
        fetchGame();
    }, []);
  return (
    <>
    <Splide options={{
        padding: '3rem',
        gap: '2.5rem',
        pagination: false,
        drag: 'free',
        }}>

          {gameReviews.map((review, index) => {
            return (
              <SplideSlide className="review-slide" key={index}>
            <section className="review-container"  onClick={() => setReviewObj(review)}>
              <div className="review-slide">
                <div className="username-rating">
                  <h2 className="review-username">{review?.username}</h2>
                  <div className="rating">{handleReviewStars(review.stars)}</div>
                </div>
                <h4 className='review-preview-title'>{review?.title}</h4>
                <p className="review-text">{review?.review}</p>
              </div>
            </section>
          </SplideSlide>
            )
          })}
          
      </Splide>
      {reviewObj ? <ReviewModalRead reviewObj={reviewObj} setReviewObj={setReviewObj} /> : ''}
      </>
  )
}

export default Reviews