import { useState, useEffect } from "react"
import Nav from "../Components/utils/Nav"
import LazyLoadingReviews from "../Components/LazyLoadingReviews";
import RandomReviews from "../Components/RandomReviews";

function DiscoverReviews() {
  const [reviews, setReviews] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  
  const fetchReviews = async () => {
    const api = await fetch(`http://localhost:3000/api/reviews?limit=50`);
    const response = await api.json();
    setReviews(response);
    setLoading(false)
  }

  useEffect(() => {
    //Simulate slower loading to see lazy load
    setTimeout(() => {
      fetchReviews()
    }, 200);
  }, []);

  return (
    <div>
      {loading ? <LazyLoadingReviews /> : <RandomReviews reviews={reviews} /> } 
      <Nav />
    </div>
  )
}

export default DiscoverReviews