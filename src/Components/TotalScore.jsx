import React from 'react'
import './css/TotalScore.css';
export default function TotalScore({score}) {
  return (
    <>
        <div className="score-container">
            <h1>
                {score}
            </h1>
            <p>
                Total Score
            </p>
        </div>
    </>
  )
}
