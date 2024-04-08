import { useState } from 'react'

import './App.css'
import GameStart from './Components/GameStart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <GameStart/>
    </>
  )
}

export default App
