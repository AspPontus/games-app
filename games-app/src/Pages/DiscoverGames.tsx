import Slider from "../Components/Slider"
import Nav from "../Components/utils/Nav"
import SearchBar from "../Components/utils/SearchBar"

function DiscoverGames() {
  return (
    <div>
      <SearchBar />
        <div className="nav-spacing">
          <Slider genre={'recommended'} />
          <Slider genre={'action'}/>
          <Slider genre={'shooter'}/>
        </div>
      <Nav />
    </div>
  )
}

export default DiscoverGames