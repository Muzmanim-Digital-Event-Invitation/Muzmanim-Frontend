import { useEffect } from "react";
import "./EventInfo.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { newEventAction } from "../../../../App/newEventSlice";

function EventInfo({ stepNumber, setStepNumber }: { stepNumber: number, setStepNumber: (sn: number) => void }): JSX.Element {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const eventType = useSelector((state: any) => state.newEvent)

    useEffect(() => {
        console.log(eventType);

    })

    function onSubmit(data: any) {
        // console.log(data);

        const mergedData = { ...eventType, ...data };
        console.log(mergedData);

        dispatch(newEventAction(mergedData));


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
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>

                            <div className="formbold-form-step-1 active">
                                <div className="formbold-input-flex">
                                    <div>
                                        <label htmlFor="city" className="formbold-form-label"> עיר </label>
                                        <input
                                            defaultValue={eventType && eventType.city ? eventType.city : ""}
                                            type="text"
                                            id="city"
                                            className="formbold-form-input"
                                            {...register("city")}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>

                                        <label htmlFor="street" className="formbold-form-label">רחוב</label>
                                        <input
                                            defaultValue={eventType && eventType.street ? eventType.street : ""}
                                            type="text"
                                            id="street"
                                            className="formbold-form-input"
                                            {...register("street")}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="formbold-input-flex">
                                <div>
                                    <label htmlFor="eventDate" className="formbold-form-label">תאריך</label>
                                    <input
                                        defaultValue={eventType && eventType.eventDate ? eventType.eventDate : ""}
                                        type="date"
                                        id="eventDate"
                                        className="formbold-form-input"
                                        {...register("eventDate")}
                                    />
                                </div>
                            </div>

                            <div className="formbold-input-flex">
                                <div>
                                    <label htmlFor="eventStartHour" className="formbold-form-label">שעת התחלה</label>
                                    <input
                                        defaultValue={eventType && eventType.eventStartHour ? eventType.eventStartHour : ""}
                                        type="time"
                                        id="eventStartHour"
                                        className="formbold-form-input"
                                        {...register("eventStartHour")}
                                    />
                                </div>
                            </div>


                            <div className="formbold-form-confirm">

                                <button className="  formbold-btn " onClick={() => stepBack()}>חזור אחורה</button>
                                <button type="submit" className="  formbold-btn active" > שלב הבא</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default EventInfo;
