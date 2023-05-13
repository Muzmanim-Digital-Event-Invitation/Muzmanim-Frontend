import CustomizedSteppers from "./Steper"
import "./NewEvent.scss";
import { useState } from "react";
import EventInfo from "./EventInfo/EventInfo";
import EventDesign from "./EventDesign/EventDesign";
import EventType from "./EventType/EventType";

function NewEvent(): JSX.Element {
  const [stepNumber, setStepNumber] = useState<number>(0);



  return (
    <div className="NewEvent">
      <h1>test</h1>
      <CustomizedSteppers stepNumber={stepNumber} />
      {stepNumber === 0 ?
        <EventType stepNumber={stepNumber} setStepNumber={setStepNumber} />

        : <></>}
      {stepNumber === 1 ?
        <EventInfo stepNumber={stepNumber} setStepNumber={setStepNumber} />
        : <></>}
      {stepNumber === 2 ?
        <EventDesign stepNumber={stepNumber} setStepNumber={setStepNumber} />

        : <></>}


    </div> 
  );
}

export default NewEvent;
