import { EventModel } from "../Models/EventModel";
import { GuestModel } from "../Models/GuestModel";
import { toastsFunctions } from "./ToastFunctions";
import { config } from "./config";

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
      return response;
    } catch (e: any) {
      return undefined;
    }
  }

  
  async createNewEvent(event: EventModel) {
    try {
      const response = await fetch(`${config.BASE_URL}/newEvent`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
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
  
  async editEvent(event: EventModel) {
    try {
      const response = await fetch(`${config.BASE_URL}/newEvent/${event.id}`, {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
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
          authorization: "" + window.localStorage.getItem("ClickLearnLogged"),
        },
        body: JSON.stringify({ guestInfo }),
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



}

export const servicesFunctions = new ServicesFunctions();
