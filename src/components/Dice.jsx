export default function Dice(props){
    //kordinatat ne varesi te nr te zarit si do vendosen pikat
    const pipPositions = {
        1:[[2,2]],
        2:[[1,1],[3,3]],
        3:[[1,1],[2,2],[3,3]],
        4:[[1,1],[1,3],[3,1],[3,3]],
        5:[[1,1],[1,3],[2,2],[3,1],[3,3]],
        6:[[1,1],[2,1],[3,1],[1,3],[2,3],[3,3]]
    }
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
                        <div className="pip-grid">
                            {pipPositions[props.value].map(([row, col], index)=>(
                                <span key={index} className={`pip row-${row} col-${col}`}></span>
                            ))}

                        </div>
        </button>
    </>
  )
}