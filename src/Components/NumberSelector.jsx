import React, { useState } from 'react'
import './css/NumberSelector.css';
export default function NumberSelector() {
  const [selectedNumber, setSelectedNumber] = useState()
  const numbers = [1, 2, 3, 4, 5, 6]


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
