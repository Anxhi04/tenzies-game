import Dice from "./Dice"

export default function Main(){
  return(
    <>
        <div className="frame">
            <div className="content">
               
               <div><Dice/>
                <Dice/>
                <Dice/>
                <Dice/>
                <Dice/>
              </div>
              <div>
                <Dice/>
                <Dice/>
                <Dice/>
                <Dice/>
                <Dice/></div> 
            </div>
        </div>
    </>
  )
}