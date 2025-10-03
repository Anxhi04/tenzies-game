import Dice from "./Dice"
import React from "react"
import Confetti from "react-confetti"

export default function Main(){

    const [dice, setDice] = React.useState(allNewDice())
    const gameWon = dice.every(die => die.isHeld && die.value === dice[0].value)

    function allNewDice() {
        return new Array(10).fill(0).map(() => ({
             value: Math.ceil(Math.random() * 6),
             isHeld: false
  }))
}

    function diceElements(){
        return  dice.map((dice , index)=>
        <Dice key={index} 
              value={dice.value}
              isHeld={dice.isHeld}
              holdDice={() => holdDice(index)}
              />)
    }
// Generate new value for dice which are not held 
    function rollDice(){
        if(dice.every(die => die.isHeld)){
            setDice(allNewDice())
        }else{
            setDice(oldDice => oldDice.map(die => 
            die.isHeld ? die : {
                ...die,
                value: Math.ceil(Math.random() * 6),
    }))}
 
    }

    function holdDice(index){
          setDice(oldDice => oldDice.map((dice, i) => 
              i === index ? {...dice, isHeld: !dice.isHeld} : dice
  ))
    }
    
   
    const text = gameWon ? "New Game" : "Roll"
    

  return(
    <>
        <div className="frame">
            <div className="content">
                {gameWon && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all the dice are the same. Click each die to freeze 
                    it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements()}
               </div>

               <button onClick={rollDice} className="rollBtn">{text}</button>

                </div> 
        
        </div>
    </>
  )
}