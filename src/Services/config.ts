import { FaBirthdayCake, FaBaby, FaEllipsisH } from 'react-icons/fa'; // Import the desired icons
import { GiBigDiamondRing } from 'react-icons/gi'; // Import the desired icons
import { MdOutdoorGrill } from 'react-icons/md'; // Import the desired icons

class Config {

    // BASE_URL = "http://localhost:4000";
    BASE_URL = "https://muzmanim-server-8d3387c14ec0.herokuapp.com/";
    // WEB_URL = "http://localhost:5173";
    WEB_URL = "https://inquisitive-kleicha-5bb2a2.netlify.app/";
    IMAGE_URL = "https://muzmanim.s3.amazonaws.com/"

    // BASE_URL = "https://muzmanim.herokuapp.com"

    
    // eventTypeMapping : any = {
    //     1: "יום הולדת",
    //     2: "חתונה",
    //     3: "ברית",
    //     4: "על האש",
    //     5: "אחר...",
    //     // Add more mappings as needed
    //   };

    eventTypeMapping: { [key: number]: { label: string; icon: string } } = {
        1: { label: "יום הולדת", icon: "FaBirthdayCake" },
        2: { label: "חתונה", icon: "GiBigDiamondRing" },
        3: { label: "ברית", icon: "FaBaby" },
        4: { label: "על האש", icon: "MdOutdoorGrill" },
        5: { label: "אחר", icon: "FaEllipsisH" },
        // Add more mappings as needed
      };
    
      getIconComponent(iconName: string) {
        switch (iconName) {
          case "FaBirthdayCake":
            return FaBirthdayCake;
          case "GiBigDiamondRing":
            return GiBigDiamondRing;
          case "FaBaby":
            return FaBaby;
          case "MdOutdoorGrill":
            return MdOutdoorGrill;
          case "FaEllipsisH":
            return FaEllipsisH;
          default:
            return null;
        }
    }
}

export const config = new Config();
