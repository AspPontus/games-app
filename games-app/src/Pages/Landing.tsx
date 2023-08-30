import ExampleBrowse from "../Components/ExampleBrowse"
import Header from "../Components/Header"
import Hero from "../Components/Hero"

function Landing() {
  
  return (
    <div className="landing bg">
      <Header />
      <Hero />
      <ExampleBrowse />
    </div>
  )
}

export default Landing