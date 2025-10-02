import Dice from "./Dice"

export default function Main(){
  return(
    <>
        <div className="frame">
            <div className="content">
                <div className="dice-container">
               <Dice value={1}/><Dice value={1}/><Dice value={1}/><Dice value={1}/><Dice value={1}/>
               <Dice value={1}/><Dice value={1}/><Dice value={1}/><Dice value={1}/><Dice value={1}/>
               </div>

                </div> 
        
        </div>
    </>
  )
}