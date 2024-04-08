import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'

function GameHome(props) {
  return (
    <>
    <div className="container">
      <TotalScore />
      <NumberSelector />
    </div>
    </>
  )
}
export default GameHome