import {useAuth} from '../../context/AuthContext'
import StarRating from '../StarRating';

function ReviewForm({game}) {
  const { currentUser }:any = useAuth();

  const handleCharCount = (e) => {
    const charCount:number = e.target.value.split('').length;
    console.log(e.target.value.split('').length)
    if(charCount > 400){
    }
  }

  return (
    <div className='review-form'>
      <div className="header-write-review">
        <h2>{currentUser.username}</h2>
          {/* add game id-prop */}
        <StarRating game={game}/>
      </div>
      
      <div className="review-input-container">
        <h3>Title:</h3>
        <input type="text" className='review-title' name='title' />
      </div>
      <div className="review-input-container">
        <h3>Review:</h3>
        <textarea 
        name="review" 
        id="review-text-feild" 
        cols={50} 
        rows={10}
        onChange={(e) => handleCharCount(e)}>
        </textarea>
      </div>
      <input type="submit" className='gradient-button send-review' value={"Send review!"} />
    </div>
  )
}

export default ReviewForm