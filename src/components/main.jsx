import Dice from "./Dice"
import React from "react"
import Confetti from "react-confetti"

export default function Main(){

    const [dice, setDice] = React.useState(allNewDice())
    const gameWon = dice.every(die => die.isHeld && die.value === dice[0].value)
    const [seconds, setSeconds] = React.useState(0)
    const [isActive, setIsActive] = React.useState(false)
    const [rollcount, setRollcount] = React.useState(0)
    const minutes = Math.floor(seconds / 60);
    const secondsDisplay = seconds % 60;

    const buttonRef = React.useRef(null)

    React.useEffect(() => {
        if(gameWon){
            buttonRef.current.focus()
        }
    }, [gameWon])

    React.useEffect(() => {
        let interval = null;
        // Start the timer when the game starts
        if(isActive&&!gameWon){
            interval = setInterval(()=>{
                setSeconds(prev=>prev+1)
            },1000)
        }else if(!isActive && seconds !==0){
            clearInterval(interval)
        }
        return () => clearInterval(interval)

    },[isActive, seconds]);
// Stop the timer when the game is won
    React.useEffect(() => {
        if(gameWon){
            setIsActive(false)
        }
    }, [gameWon])
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
            setIsActive(true)
            startNewGame()
        }else{
            setDice(oldDice => oldDice.map(die => 
            die.isHeld ? die : {
                ...die,
                value: Math.ceil(Math.random() * 6), }))
            setRollcount(prev=>prev+1)
    }
 
    }
    function startNewGame(){
        setDice(allNewDice())
        setSeconds(0)
        setIsActive(true)
        setRollcount(0)
    }

    function holdDice(index){
        if(!isActive) setIsActive(true);

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
                <div aria-live="polite" className="sr-only">
                    {gameWon &&<p>Congratulations! You won!</p>}
                </div>
                <h2 className="timer">Time {minutes<10 ? '0': ''}{minutes}:{secondsDisplay<10?'0':''}{secondsDisplay}</h2>
                <h2 className="rollcount">Rolls: {rollcount}</h2>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all the dice are the same. Click each die to freeze 
                    it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements()}
               </div>

               <button ref={buttonRef} onClick={rollDice} className="rollBtn">{text}</button>

                </div> 
        
        </div>
    </>

  )
}