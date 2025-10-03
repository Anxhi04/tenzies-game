export default function Dice(props){
  return(
    <>
        <button onClick={props.holdDice} 
        className={`dice ${props.isHeld ? "held": ""}`}
                    aria-pressed={props.isHeld}
                    aria-label={`Dice with value ${props.value},
                                        ${props.isHeld ? "held" : "not held"}`}
                    onMouseMove={props.onMouseMove}
                    onMouseLeave={props.onMouseLeave}
                    style={props.style}
                    
                    >
            {props.value}

        </button>
    </>
  )
}