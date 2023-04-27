import Shelter from "../pages/aboutshelter/Shelter";
import Us from "../pages/contactus/Us";
import ShelterHelp from "../pages/helpshelter/ShelterHelp";
import MainHome from "../pages/mainhome/MainHome";
import Pets from "../pages/ourpets/Pets";



// ================rout data===================  /
export const privateRoutes = [

    {
        path: "/",
        element: <MainHome/>,
    },
    {
        path: "/ourpets",
        element: <Pets/>,
    },
    {
        path: "/about",
        element: <Shelter/>,
    },
    {
        path: "/help",
        element: <ShelterHelp />,
    },
    {
        path: "/contact-us",
        element: <Us />,
    },
    
]
