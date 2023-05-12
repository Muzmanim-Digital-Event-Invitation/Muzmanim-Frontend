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
          // authorization: "" + window.localStorage.getItem("MuzmanimLoggedToken"),
          authorization: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM5YWZkYTM2ODJlYmYwOWViMzA1NWMxYzRiZDM5Yjc1MWZiZjgxOTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODMwNDg3MTUsImF1ZCI6IjU0MDcxMzAwMzYtZG11MGVmNGptYXNsaWo1c21vMGQwbHQzMXVnNjNqa3YuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE2ODkzODg0ODc0OTc1NjU0OTMiLCJlbWFpbCI6ImhhcmVsc2FyYWc3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI1NDA3MTMwMDM2LWRtdTBlZjRqbWFzbGlqNXNtbzBkMGx0MzF1ZzYzamt2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6ImhhcmVsIHNhcmFnIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGJxRDdGbWRLcWtqYWhlRENUdFpEd09BVzF6UTAyd0sxNGZpTjZhb0E9czk2LWMiLCJnaXZlbl9uYW1lIjoiaGFyZWwiLCJmYW1pbHlfbmFtZSI6InNhcmFnIiwiaWF0IjoxNjgzMDQ5MDE1LCJleHAiOjE2ODMwNTI2MTUsImp0aSI6IjI5ODBjYWQ2MGI2NDZiNjU2NzBlMWRkYTdhODY3ZjllNmIyNTk1YzcifQ.Te4RW7uY7r8RLc999GdwZmgjcCAt-BvL0AK6_seJklpJiTsB8Iatof9P-tm-6Bd8Fq6So0pCrQZKhyNLygEcpGw-OO2Vcz7y4hKAhHuJSC1J14eecM9bd_VzLVzfS6CZlmE30muK3n32J9GQtlQg5A3aoq2yHNvWFSATgUF2YRtROgPJBGjNnYr_4gucIXxkrQ2faueNXuwx7ZT1AlFHP9GInSGTpJ4NhmlUugVYYkkUrtStVo_Q9o-18nAPr4aMoocVVKnz7Y8Tp8TnX5kldGnLwuYcqouTkDuwvt1upSySLQrflIGxqqLv4UdOnnAbTW1xq2q5uoBZPPCDQT5hfw",
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
