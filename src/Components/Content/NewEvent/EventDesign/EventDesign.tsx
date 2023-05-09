import "./EventDesign.css";

function EventDesign({ stepNumber, setStepNumber } : { stepNumber : number, setStepNumber : (sn: number) => void}): JSX.Element {
    
    
    function stepBack() {
        if(stepNumber < 0) return;
        setStepNumber(stepNumber - 1)
    }
    
    function stepForward() {
        if(stepNumber > 2) return;
        setStepNumber(stepNumber + 1) 
    }


    return (
        <div className="EventDesign">

            

          <button onClick={() => stepBack()}>Step Back</button>
          <button onClick={() => stepForward()}>Step Forward</button>
        </div>
    );
}

export default EventDesign;
