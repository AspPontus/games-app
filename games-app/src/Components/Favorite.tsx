import { SiUndertale } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
 
function Favorite() {
    const [favorite, setFavorite] = useState(false)
    const params = useParams();
    const { currentUser }:any = useAuth();

    const handleSave = async () => {
        const response = await fetch(`http://localhost:3000/api/users/${currentUser.uid}/favorite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                game_id: params.id,
                currentState: favorite
            })
        })
        const data = await response.json()
        console.log(data)
    }

    const fetchDefSaveState = async () => {
        const api = await fetch(`http://localhost:3000/api/users/${currentUser.uid}/favorite/${params.id}`);
        const data = await api.json();

        console.log(data)
        setFavorite(data.saved)
    }

    const handleClick = () => {
        if(favorite === false){
            setFavorite(true)
            handleSave()
        }else{
            setFavorite(false)
            handleSave()
        }
    }  

    useEffect(() => {
        fetchDefSaveState();
    }, [])

  return (
    <div>
        <SiUndertale className={favorite ? 'heart-active' : 'heart'} onClick={handleClick} size={40}/>
    </div>

  )
}

export default Favorite