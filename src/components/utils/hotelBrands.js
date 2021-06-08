import Edition from "../../assets/edition.png";
import AC from "../../assets/achotels.png";
import ALOFT from "../../assets/aloft.png";
import Autogragh from "../../assets/autogragh.png";
import courtyard from "../../assets/courtyard.png";
import delta from "../../assets/delta.png";
import design from "../../assets/design.png";
import fairfield from "../../assets/fairfield.png";
import fourpoints from "../../assets/fourpoints.png";
import gaylord from "../../assets/gaylord.png";
import homesvilla from "../../assets/homesvilla.png";
import hotels from "../../assets/hotels.png";
import JWmarriott from "../../assets/jw-marriott.png";
import lemeridien from "../../assets/lemeridien.png";
import luxurycollection from "../../assets/luxury-collection.png";
import marriott from "../../assets/marriott.png";
import marriottvacationclub from "../../assets/marriottvacationclub.png";
import moxy from "../../assets/moxy.png";
import protea from "../../assets/protea.png";
import renaissance from "../../assets/renaissance.png";
import ritzcarlton from "../../assets/ritz-carlton.png";
import sheraton from "../../assets/sheraton.png";
import springhill from "../../assets/springhill.png";
import stregis from "../../assets/stregis.png";
import towneplace from "../../assets/towneplace.png";
import tribute from "../../assets/tribute.png";
import westin from "../../assets/westin.png";
import marriottexec from "../../assets/marriottexec.png";
import element from "../../assets/element.png";

export const hotelBrands = [
  {
    category: "Luxury",
    hotels: [
      { hotelname: "Edition", image: Edition },
      { hotelname: "The Ritz Carlton", image: ritzcarlton },
      { hotelname: "The Luxury Collection", image: luxurycollection },
      { hotelname: "St Regis", image: stregis },
      { hotelname: "Hotels", image: hotels },
      { hotelname: "JW marriott", image: JWmarriott },
    ],
  },
  {
    category: "Premium",
    hotels: [
      { hotelname: "Marriott", image: marriott },
      { hotelname: "Sheraton", image: sheraton },
      { hotelname: "Marriott Vacation Club", image: marriottvacationclub },
      { hotelname: "Delta Hotels", image: delta },
      { hotelname: "Westin", image: westin },
      { hotelname: "Le Meridien", image: lemeridien },
      { hotelname: "Renaissance Hotel", image: renaissance },
      { hotelname: "Autograph Collections Hotels", image: Autogragh },
      { hotelname: "Tribute Portfolio", image: tribute },
      { hotelname: "Design Hotels", image: design },
      { hotelname: "Gaylord Hotels", image: gaylord },
      
    ],
  },
  {
      category: "Select",
      hotels:[
        { hotelname: "Courtyard", image: courtyard },
        { hotelname: "Four Points", image: fourpoints },
        { hotelname: "Springhill suites", image: springhill },
        { hotelname: "Fairfield", image: fairfield },
        { hotelname: "Protea Hotels", image: protea },
        { hotelname: "AC Hotels Marriott", image: AC },
        { hotelname: "Aloft Hotels", image: ALOFT },
        { hotelname: "Moxy Hotels", image: moxy },
      ]
  },
  {
    category: "Longer Stays",
    hotels: [
      { hotelname: "Homes & Villas", image: homesvilla },
      { hotelname: "Residence Inn", image: renaissance },
      { hotelname: "Towne Place Suites", image: towneplace },
      { hotelname: "Marriott Executive Apartments", image: marriottexec },
      { hotelname: "Element", image: element },
    ],
  },
];
