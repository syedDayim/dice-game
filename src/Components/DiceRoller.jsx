import "./css/DiceRoller.css";

export default function DiceRoller({handleRoll, diceValue}) {
    
    
    return (
        <>
            <div className="dice" onClick={handleRoll}>
                <img src={`./dice/dice_${diceValue}.png`} alt="" width={250} height={250} />
                <p>Click on the dice to roll</p>
            </div>
        </>
    )
}