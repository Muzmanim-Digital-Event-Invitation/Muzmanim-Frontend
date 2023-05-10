import "./EventInfo.scss";
import { useForm } from "react-hook-form";

function EventInfo({ stepNumber, setStepNumber }: { stepNumber: number, setStepNumber: (sn: number) => void }): JSX.Element {

    const { register, handleSubmit } = useForm();



    function onSubmit(data:any){
        console.log(data);

        stepForward();
    }
    function stepBack() {
        if (stepNumber < 0) return;
        setStepNumber(stepNumber - 1)
    }

    function stepForward() {
        setStepNumber(stepNumber + 1) 

    }

    return (


        <div className="EventInfo">
    
            <div className="formbold-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="formbold-form-step-1 active">
                        <div className="formbold-input-flex">
                            <div>
                                <label  htmlFor="city" className="formbold-form-label"> עיר </label>
                                <input
                                    type="text"
                                    required
                                    id="city"
                                    className="formbold-form-input"
                                    {...register("city")}
                                />
                            </div>
                            <div>
                                <label htmlFor="street" className="formbold-form-label">רחוב</label>
                                <input
                                    type="text"
                                    required
                                    id="street"
                                    className="formbold-form-input"
                                    {...register("street")}
                                />
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <label htmlFor="eventDate" className="formbold-form-label">תאריך</label>
                                <input
                                    type="date"
                                    required
                                    id="eventDate"
                                    className="formbold-form-input"
                                    {...register("eventDate")}
                                />
                            </div>
                            <div>
                                <label htmlFor="eventStartHour" className="formbold-form-label">שעת התחלה</label>
                                <input
                                    type="time"
                                    id="eventStartHour"
                                    className="formbold-form-input"
                                    {...register("eventStartHour")}
                                />
                            </div>
                        </div>
                  

                            <div className="formbold-form-confirm">

                                <button className="formbold-confirm-btn " onClick={() => stepBack()}>חזור אחורה</button>
                                <button type="submit" className="formbold-confirm-btn active" > שלב הבא</button>
                            </div>

                        </div>
                



                </form>
            </div>
        </div>

    );
}

export default EventInfo;
