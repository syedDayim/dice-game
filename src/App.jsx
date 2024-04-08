import { useState } from 'react'
import GameStart from './Components/GameStart'
import GameHome from './Components/GameHome'

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(true)
  function handleHomepage(){
    setIsGameStarted((prev) => !prev)
  }
  return (
    <>
      {isGameStarted ? <GameHome /> : <GameStart onClick={handleHomepage} />}
    </>
  )
}

