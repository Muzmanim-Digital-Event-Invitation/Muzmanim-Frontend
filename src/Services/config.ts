
class Config {

    BASE_URL = "http://localhost:4000";
    WEB_URL = "http://localhost:5173";
    // BASE_URL = "https://muzmanim.herokuapp.com"

    
    eventTypeMapping : any = {
        1: "יום הולדת",
        2: "חתונה",
        3: "ברית",
        4: "על האש",
        5: "אחר...",
        // Add more mappings as needed
      };
}

export const config = new Config();
