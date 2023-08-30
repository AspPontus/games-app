import { SiUndertale } from 'react-icons/si'
import { useState } from 'react'

function Favorite() {

    const [favorite, setFavorite] = useState(false)

    const handleClick = () => {
        if(favorite === false){
            setFavorite(true)
        }else{
            setFavorite(false)
        }
    }  

  return (
    <div>
        <SiUndertale className={favorite ? 'heart-active' : 'heart'} onClick={handleClick} size={40}/>
    </div>

  )
}

export default Favorite