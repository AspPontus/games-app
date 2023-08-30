import HeroCatBtns from "./HeroCatBtns"

function Hero() {
  return (
   <>
   <div className="hero">
    <div className="hero-left-col">
      <h1 className="hero-heading">
        Find your <br/> new&nbsp;favorite<br/> game!
      </h1>
      <button className="gradient-button">Find a Random Game</button>
    </div>
    {/* <HeroCatBtns /> */}
   </div>
   </>
  )
}

export default Hero