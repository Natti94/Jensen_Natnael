import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greetings'

function App() {

  return (
    <>
     <Greeting isLoggedIn = {true} isAdmin = {false} />
     
    </>
  )
}

export default App
