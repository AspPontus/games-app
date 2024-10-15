import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import StarRating from '../Components/StarRating';
import Favorite from '../Components/Favorite';
import { AiFillStar } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import ReviewModal from '../Components/Modals/ReviewModal';
import Reviews from '../Components/Reviews';


function GamePage() {
    const [game, setGame] = useState<any>({});
    const [gameInfo, setGameInfo] = useState<any>({});
    const [readMore, setReadMore] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const params = useParams()

    const fetchGame = async () => {
        const api = await fetch(`https://games-api-ky9l.onrender.com/api/games/${params.id}`);
        const data = await api.json();
        setGame(data);
        setGameInfo(data.game_info)
    }

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
  
    const handleClick = () => {
      setModal(true)
    }

    const handleReviewStars = (amount:number) => {
      const stars:any = [];
      for(let i = 1; i <= amount; i++) {
        stars.push(<AiFillStar /> )    
      }
      return stars
    }

   console.log(handleReviewStars(2))
    useEffect(() => {
        fetchGame();
        scrollToTop();
    }, []);

  return (
    <div className='game-page'>
    
        <Link to={'/discover_games'}><div className="back"><BiArrowBack /></div></Link>
        <div className='player-bg overlay'>
        <img className='poster-bg' src={game.poster_img?.replace('w=177&h=177', 'w=600&h=600')} alt="" />
        <div className="game-info-title">
        <h1>{game.title}</h1>
        <h2 className='category'>{gameInfo.category?.join(' | ')}</h2>
      </div>  
        </div>
        <Splide className="container-splide" options={{
            arrows: false,
            pagination: false,
            drag: 'free',
            type: 'loop',
            autoWidth: true,
      }}>
        {gameInfo.screenshots?.map((image, index) => {
          return (
            <SplideSlide key={index}>
                <img src={image} alt="" />
            </SplideSlide>
          )
        })}
      </Splide>
        <div className="dev-desc">
          <div className='personal-rating'>
            <StarRating game={game} modal={false}/>
            <Favorite />
          </div>
          <h3 className='developer'>{gameInfo.developer}</h3>
          <div className={readMore ? "desc-container show" : "desc-container"}>
            <p className='description'>{gameInfo.description}</p> 
          </div>
          <div className='readmore' onClick={() => setReadMore(!readMore)}>{readMore ? "Show less" : "Show more"}</div>         
          {/* MAKE INTO COMPONENT TO EASILY CHECK FOR NO REVIEWS EDGECASE */} 
          <h2 className="review-label">Reviews:</h2>
        
        </div>
        {<Reviews id={params.id}/>}
          <button className='gradient-button write-review center' onClick={() => handleClick()}>Write a review!</button>
        {modal ?  <ReviewModal setModal={setModal} game={game}/> : ''}
    </div>
  )
}

export default GamePage