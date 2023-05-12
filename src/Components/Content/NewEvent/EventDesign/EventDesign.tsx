import React from "react";
import "./EventDesign.scss";

function EventDesign({ stepNumber, setStepNumber }: { stepNumber: number, setStepNumber: (sn: number) => void }): JSX.Element {


    function stepBack() {
        if (stepNumber < 0) return;
        setStepNumber(stepNumber - 1)
    }

    function stepForward() {
        if (stepNumber > 2) return;
        setStepNumber(stepNumber + 1)
    }


    return (
        <div className="EventDesign">
            <form className="design-form">
                <div className="form-section">
                    <h3>בחר רקע</h3>
                    <div className="bg-selection">
                        <div className="bg-option"></div>
                        <div className="bg-option"></div>
                        <div className="bg-option"></div>
                        <div className="bg-option"></div>
                    </div>
                </div>
                <div className="form-section">
                    <div className="font-selection">
                        <div className="font-option">
                            מוזמנים
                        </div>
                        <div className="font-option">
                            מוזמנים
                        </div>
                        <div className="font-option">
                            מוזמנים
                        </div>
                        <div className="font-option">
                            מוזמנים
                        </div>
                    </div>
                </div>
                <div className="form-section"></div>
                <div className="form-section"></div>
            </form>
            <div className="preview-wraper">
                <div className="preview"></div>
            </div>

            
            <div className="formbold-form-confirm">

            <button className="formbold-confirm-btn " onClick={() => stepBack()}>חזור אחורה</button>
            <button type="submit" className="formbold-confirm-btn active" > שלב הבא</button>
            </div>
        </div>
    );
}

export default EventDesign;
