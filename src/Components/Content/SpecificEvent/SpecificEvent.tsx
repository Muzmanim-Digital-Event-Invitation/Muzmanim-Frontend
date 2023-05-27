import React, { useEffect, useState } from "react";
import "./SpecificEvent.css";
import { useParams } from "react-router-dom";
import { EventModel } from "../../../Models/EventModel";
import { servicesFunctions } from "../../../Services/ServicesFunctions";
import Invite from "../../Invite/Invite";
import LoaderEnvelope from "./LoaderEnvelope/LoaderEnvelope";


function SpecificEvent(): JSX.Element {
  const { eventId } = useParams(); 
  const [eventData, setEventData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true)

useEffect(() => {
  console.log(eventId);
  setIsLoading(true);

  if (eventId) {
    servicesFunctions.getEventDataByIdForGuests(eventId).then((res: EventModel) => {
      console.log(res);
      
      setEventData(res);
      console.log(res.iconId);
      setIsLoading(false);
    });
  }
}, []);



    return (
        <div className="SpecificEvent">
            {isLoading ? 
          <LoaderEnvelope/>
            :     
            <Invite
            eventData={eventData}
            background={eventData.background}
            font={eventData.font}
            icon={eventData.iconId}
            image={eventData.imageId}
            />     
        }
        </div>
    );
}

export default SpecificEvent;
