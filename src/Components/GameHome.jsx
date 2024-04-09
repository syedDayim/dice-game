import React from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import DiceRoller from './DiceRoller';


function GameHome(props) {
  return (
    <>
    <div className="container">
      <TotalScore />
      <NumberSelector />
    </div>
      <DiceRoller/>
    </>
  )
}
export default GameHome