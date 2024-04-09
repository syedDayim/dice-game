import React, { useEffect, useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import DiceRoller from './DiceRoller';


function GameHome(props) {
  const [randomNumber, setRandomNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState()
  const [score, setScore] = useState(0)
  const [error, setError] = useState('')
  const numbers = [1, 2, 3, 4, 5, 6]

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }

  function handleRoll() {
    if(!selectedNumber) {
      setError("Please select a number")
      return
    }
    setError('')
    let newNum = generateRandomNumber();
    setRandomNumber(newNum);


    if (selectedNumber == newNum) {
      setScore(prev => prev + newNum)
    }
    else{
      setScore(prev => prev - newNum);
    }

    setSelectedNumber(undefined)


  }
  



  

  

  return (
    <>
      <div className="container">
        <TotalScore
          score={score}
        />

        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          numbers={numbers}

        />
      </div>
      <DiceRoller handleRoll={handleRoll} diceValue={randomNumber} />
    </>
  )
}
export default GameHome