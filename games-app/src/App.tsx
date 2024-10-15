import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from "./Pages/Profile"
import PrivateRoute from './Components/PrivateRoute'
import GamePage from './Pages/GamePage'
import MainFeed from './Pages/MainFeed'
import DiscoverReviews from './Pages/DiscoverReviews'
import DiscoverGames from './Pages/DiscoverGames'

function App() {


  return (
    <>
    <BrowserRouter>
    <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<Landing />}/> */}
          <Route path="/" element={<MainFeed />}/>
          <Route path="/discover_reviews" element={<DiscoverReviews />}/>
          <Route path="/discover_games" element={<DiscoverGames />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>}/>
          <Route path="/game/:id" element={<GamePage />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
