import { AiFillStar } from 'react-icons/ai'

function ReviewModalRead({reviewObj, setReviewObj}) {
    const handleReviewStars = (amount:number) => {
        const stars:any = [];
        for(let i = 1; i <= amount; i++) {
          stars.push(<AiFillStar /> ) 
          
        }
        return stars
      }
    console.log(reviewObj)
  return (
    <>

    <div className="review-modal-read">
      <div className='read-modal-top'>
      <button className="close-modal" onClick={() => setReviewObj(null)}>X</button> 
      <h2>{reviewObj.username}</h2>
      <div className="rating">{handleReviewStars(reviewObj.stars)}</div>
      </div>
     <div className='scroll-content'>
            <h3>{reviewObj.title}</h3>
            <p>{reviewObj.review}</p>
      </div>
    </div>
    </>
  )
}

export default ReviewModalRead