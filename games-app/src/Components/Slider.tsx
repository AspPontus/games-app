import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';


function Slider(genre:any) {
  const [games, setGames] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();


  const fetchGames = async () => {
    if (genre.genre === 'recommended') {
      const api = await fetch(`https://games-api-ky9l.onrender.com/api/games`);
      const data = await api.json();
      setGames(data)
      setLoading(true);
    }  else {
    const api = await fetch(`https://games-api-ky9l.onrender.com/api/games?category=${genre.genre}`);
    const data = await api.json();
    setGames(data)
    setLoading(true);
    }
   
  };

  const handleNavigate = (item) => {
    navigate("/game/" + item._id)
    console.log(item)
  }

    useEffect(() => {
      fetchGames()
    }, [])
  return (
    <div>
      <h2 className="slider-title">{genre.genre}</h2>
      <Splide className="container-splide" options={{
            arrows: false,
            pagination: false,
            drag: 'free',
            type: 'loop',
            autoWidth: true,
      }}>
        {loading ? 
        <div className="lazy-slider-container">
          <div className="lazy-slider glare"></div> 
          <div className="lazy-slider glare"></div> 
        </div>
        : <div></div>}
        {games.map(game => {
          return (
            <SplideSlide key={game._id} onClick={() => handleNavigate(game)}>
              
            <div className="game-container-slider" style={{background: `${game.poster_img}`}}>
            <div className="poster-outer">
              <img className="poster" src={game.poster_img.replace('w=177&h=177', 'w=400&h=400')} alt="" />
            </div>
            <div className="info">
              <div className="info-container">
                <h1 className="game-title-container">{game.title}</h1>
              </div>
            </div>
          </div>    
            </SplideSlide>
          )
        })} 
      </Splide>
    </div>
  )
}

export default Slider