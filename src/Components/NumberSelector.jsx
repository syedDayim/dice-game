import React, { useState } from 'react'
import './css/NumberSelector.css';
export default function NumberSelector({selectedNumber, setSelectedNumber, numbers, error}) {
 


  const selectedStyle = {
    backgroundColor: "black",
    color: "white",
  }
  const unSelectedStyle = {
    backgroundColor: "white",
    color: "black",
  }

  


  return (
    <>
      <div className="comp-holder">
      {error}
        <div className="box-container">
          {

            numbers.map((value, i) => {
              return (<div
                className='box' key={i}
                onClick={() => setSelectedNumber(value)}
                style={(selectedNumber === value) ? selectedStyle : unSelectedStyle}
              >
                {value}
              </div>

              )
            })

          }
        </div>


        <p className='paragraph'>Select Number</p>

      </div>
    </>
  )
}
