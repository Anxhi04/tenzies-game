import Dice from "./Dice"
import React from "react"

export default function Main(){

    const [dice, setDice] = React.useState(allNewDice())
    const [isHeld, setIsHeld] = React.useState(false)

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

    function rollDice(){
        setDice(allNewDice())
    }
    function holdDice(index){
          setDice(oldDice => oldDice.map((dice, i) => 
              i === index ? {...dice, isHeld: !dice.isHeld} : dice
  ))
    }
  return(
    <>
        <div className="frame">
            <div className="content">
                <div className="dice-container">
                    {diceElements()}
               </div>

               <button onClick={rollDice} className="rollBtn">Roll dice</button>

                </div> 
        
        </div>
    </>
  )
}