import Dice from "./Dice"
import React from "react"

export default function Main(){

    const [dice, setDice] = React.useState(allNewDice())
    function allNewDice(){
        return new Array(10)
                       .fill(0)
                       .map(num => Math.ceil(Math.random()*6))
    }
    function diceElements(){
        return  dice.map(num => 
       <Dice value={num} />
    )
}
  return(
    <>
        <div className="frame">
            <div className="content">
                <div className="dice-container">
                    {diceElements()}
               </div>

                </div> 
        
        </div>
    </>
  )
}