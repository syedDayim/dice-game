import React from 'react'
import './css/NumberSelector.css';
export default function NumberSelector() {
  const numbers = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="comp-holder">

      <div className="box-container">

        {numbers.map((value, i) => {
          return <div className='box' key={i}>{value}</div>
        })}
      </div>
      <p className='paragraph'>Select Number</p>
        </div>
    </>
  )
}
