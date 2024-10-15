import {GiPlainArrow} from 'react-icons/gi'
import {useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { handleVote } from './utils/GlobalFunctions';

function Vote({review}) {
    const [voteCount, setVoteCount] = useState(review.vote_up.length - review.vote_down.length);
    const { currentUser }:any = useAuth();

    const handleClick = (value) => {
        if(!currentUser) return console.log('not logged in')
        if(value === 'inc') {
            handleVote(currentUser.uid, review, review.vote, 'inc')
            setVoteCount(voteCount + 1) 
        } else {
            handleVote(currentUser.uid, review, review.vote, 'dec')
            setVoteCount(voteCount - 1) 
        }
    }
  return (
    <div className='vote'>
        <GiPlainArrow className="top arrow" onClick={() => {handleClick('inc')}}/>
            <div>{voteCount}</div>
        <GiPlainArrow className="arrow" onClick={() => {handleClick('dec')}}/>
    </div>
  )
}

export default Vote