import { useEffect } from "react";
import "./EventInfo.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { newEventAction } from "../../../../App/newEventSlice";

function EventInfo({ stepNumber, setStepNumber }: { stepNumber: number, setStepNumber: (sn: number) => void }): JSX.Element {

    const { register, handleSubmit , getValues, formState: { errors }} = useForm();
    const dispatch = useDispatch();

    const eventType = useSelector((state: any) => state.newEvent)

    useEffect(() => {
        console.log(eventType);

    })

    function onSubmit(data: any) {
        const mergedData = { ...eventType, ...data };
        dispatch(newEventAction(mergedData));
        stepForward();
    }

    function stepBack() {
        if (stepNumber < 0) return;
        const currentData = getValues();
        console.log(currentData);
        const mergedData = { ...eventType, ...currentData };
        console.log(mergedData);
        dispatch(newEventAction(mergedData));
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
                                            {...register("city", { required: true })}
                                            />
                                            {errors.city && <p className="error-message">זהו שדה חובה.</p>}
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
                                            {...register("street", { required: true })}
                                        />
                                            {errors.street && <p className="error-message">זהו שדה חובה.</p>}

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
                                        {...register("eventDate", { required: true })}
                                    />

                                            {errors.eventDate && <p className="error-message">זהו שדה חובה.</p>}
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
                                        {...register("eventStartHour", { required: true })}
                                    />
                                            {errors.eventStartHour && <p className="error-message">זהו שדה חובה.</p>}

                                </div>
                            </div>


                            <div className="formbold-form-confirm">

                                <button className="  formbold-btn step_back_btn" onClick={() => stepBack()}>חזור אחורה</button>
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
