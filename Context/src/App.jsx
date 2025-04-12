import { useState } from 'react'
import './App.css'
import UserContext from './Context/UserContext'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
     <h1>Yuvraj</h1>
    <Login/>
     <Profile/>
    </UserContext.Provider>
  )
}

export default App
