import '../../ComponentStyles/SearchBarStyles.css'
import { useEffect, useState } from 'react';

function SearchBar() {
    const [y, setY] = useState(window.scrollY);
    const [searchState, setSearchState] = useState(false);

    /* CURRENTLY ALWAYS LISTENING */
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY && window.scrollY > 50) {
          console.log("scrolling up");
          setSearchState(false)
        } else if (y < window.scrollY && window.scrollY > 60) {
          console.log("scrolling down");
          setSearchState(true)
        }
        setY(window.scrollY);
      };

useEffect(() => {
  window.addEventListener("scroll", (e) => handleNavigation(e));

  return () => { // return a cleanup function to unregister our function since it will run multiple times
    window.removeEventListener("scroll", (e) => handleNavigation(e));
  };
}, [y]);
  return (
    <div className={searchState ? 'search show' : 'search'}>
        <input type="text" placeholder="Search for a game..." className="search-feild" />  
    </div>
  )
}

export default SearchBar