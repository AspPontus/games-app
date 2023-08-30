import Slider from "./Slider"

function ExampleBrowse() {
  return (
    <div className="page-view">
      <div className="search">
        <h2>Search Game:</h2>
        <input type="text" className="search-feild" />  
      </div>
      <Slider genre={'recommended'} />
      <Slider genre={'action'} />
      <Slider genre={'shooter'} />
    </div>
  )
}

export default ExampleBrowse