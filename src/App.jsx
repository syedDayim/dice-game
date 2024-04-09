import { useState } from 'react'
import GameStart from './Components/GameStart'
import GameHome from './Components/GameHome'

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  function handleHomepage(){
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
      {isGameStarted ? <GameHome /> : <GameStart onClick={handleHomepage} />}
    </>
  )
}

