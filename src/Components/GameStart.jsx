import '../Components/css/GameStart.css';

export default function GameStart(props) {
  return (
    <>
        
      <div className="container">
        <div className="image">
          <img src="./images/diceLogo.png" alt=""/>
        </div>

        <div className="text-container">
          <h1>Dice Game</h1>
          <button onClick={props.onClick}>Play Now</button>
        </div>
      </div>
    
    </>
  )
}
