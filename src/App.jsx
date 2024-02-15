import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar'
import { auth } from './firebase/Config'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatBox from './component/ChatBox'
import Welcome from './component/Welcome'

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className='bg-purple-200'>
      <NavBar />
      {user ? <ChatBox /> : <Welcome />}

    </div>
  )
}

export default App
