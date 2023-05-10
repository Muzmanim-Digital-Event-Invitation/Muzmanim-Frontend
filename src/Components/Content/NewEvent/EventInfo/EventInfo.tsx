import "./EventInfo.css";

function EventInfo( { stepNumber, setStepNumber } : { stepNumber : number, setStepNumber : (sn: number) => void}): JSX.Element {

    function stepBack() {
        if(stepNumber < 0) return;
        setStepNumber(stepNumber - 1)
    }
    
    function stepForward() {
        setStepNumber(stepNumber + 1) 
    }



    return (
        <div className="EventInfo">

			<input type="text" placeholder="Name" />

            <button onClick={() => stepBack()}>Step Back</button>
          <button onClick={() => stepForward()}>Step Forward</button>
        </div>
    );
}

export default EventInfo;
