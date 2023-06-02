import { EventModel } from "../Models/EventModel";
import { GuestModel } from "../Models/GuestModel";
import { toastsFunctions } from "./ToastFunctions";
import { config } from "./config";
import axios from 'axios';

class ServicesFunctions {
  async getEventByUser(): Promise<EventModel[]> {
    try {
      const response = await fetch(`${config.BASE_URL}/eventsByUser`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),
        },
      }).then((res) => res.json());
      return response;
    } catch (e: any) {
      return [];
    }
  }

  async getEventDataByIdForGuests(eventId: string): Promise<EventModel | undefined> {
    try {
      const response = await fetch(`${config.BASE_URL}/eventForGuestById/${eventId}`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),
        },
      }).then((res) => res.json());
      console.log(response);
      
      return response;
    } catch (e: any) {
      return undefined;
    }
  }
  
  async getSpesificEvent(eventId: string): Promise<EventModel | undefined> {
    try {
      const response = await fetch(`${config.BASE_URL}/speseficEvent/${eventId}`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),
        },
      }).then((res) => res.json());
      console.log(response);
      
      return response;
    } catch (e: any) {
      return undefined;
    }
  }

  async deleteEventById(eventId: string) {
    try {
      const response = await fetch(`${config.BASE_URL}/deleteEvent/${eventId}`, {
        mode: "cors",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),
        },
      }).then((res) => res.json());
      console.log(response);
      
      return response;
    } catch (e: any) {
      return undefined;
    }
  }


  async deleteGuestById(guestId: number, eventId: string) {
    try {
      const response = await fetch(`${config.BASE_URL}/deleteGuest/${guestId}/${eventId}`, {
        mode: "cors",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),
        },
      }).then((res) => res.json());
      console.log(response);
      
      return response;
    } catch (e: any) {
      return undefined;
    }
  }


  
  async Register(token: string) {
    try {
      const response = await fetch(`${config.BASE_URL}/register`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: token,
        },
      }).then((res) => res.json());
      console.log(response);
      
      return response;
    } catch (e: any) {
      console.log(e);
      return false;
    }
  }




async createNewEvent(event: EventModel) {
    try {
        const formData = new FormData();

        formData.append("eventType", event.eventType.toString());
        formData.append("hallName", event.hallName);
        formData.append("name1", event.name1);
        formData.append("name2", event.name2);
        formData.append("food", event.food.toString());
        formData.append("vegetarian", event.vegetarian.toString());
        formData.append("vegan", event.vegan.toString());
        formData.append("kids", event.kids.toString());
        formData.append("regular", event.regular.toString());
        formData.append("city", event.city);
        formData.append("street", event.street);
        formData.append("eventDate", event.eventDate.toString());
        formData.append("eventStartHour", event.eventStartHour.toString());
        formData.append("background", event.background);
        formData.append("iconId", event.iconId);
        console.log(event.iconId);
        
        formData.append("imageId", event.image);

        const response = await axios.post(`${config.BASE_URL}/newEvent`, formData, {
            headers: {
                "Access-Control-Origin": "*",
             authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),

            },
        });

        console.log(response.data);
        return true;
    } catch (e) {
        console.log(e);
        // toastsFunctions.toastError(e);
        return false;
    }
}

  
  async editEvent(event: EventModel, eventId: string) {
    try {
      const response = await fetch(`${config.BASE_URL}/editEventInfo/${eventId}`, {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),
          
        },
        body: JSON.stringify({ event }),
      }).then((res) => res.json());
      console.log(response);
      return true;
    } catch (e: any) {
      console.log(e);
      toastsFunctions.toastError(e);
      return false;
      
    }
  }
  
  async submitEventForm(guestInfo: GuestModel, eventId: string) {
    try {
      const response = await fetch(`${config.BASE_URL}/submitEventForm/${eventId}`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
        },
        body: JSON.stringify( guestInfo ),
      }).then((res) => res.json());
      console.log(response);
      return true;
    } catch (e: any) {
      console.log(e);
      toastsFunctions.toastError(e);
      return false;
      
    }
  }


  async guestsByEvent(eventId: string): Promise<GuestModel[]> {
    try {
      const response = await fetch(`${config.BASE_URL}/guestsByEvent/${eventId}`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),

        },
      }).then((res) => res.json());
      return response;
    } catch (e: any) {
      return [];
    }
  }

   extractDateFromISOString(dateTimeString : string) {
    const date = dateTimeString.split('T')[0];
    return date;
  }
  

}

export const servicesFunctions = new ServicesFunctions();
