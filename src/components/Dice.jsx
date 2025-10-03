export default function Dice(props){
  return(
    <>
        <button onClick={props.holdDice} className={`dice ${props.isHeld ? "held": ""}`}>
            {props.value}
        </button>
    </>
  )
}