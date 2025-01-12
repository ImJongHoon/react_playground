import { useOutletContext } from "react-router-dom";
import LoggedInComponent from "../components/LoggedInComponent";
import LoggedOutComponent from "../components/LoggedOutComponent";


interface OuletContextType {
    isLoggedIn: boolean,
    isDarkMode: boolean,
}

function Home(){
    const {isLoggedIn, isDarkMode} = useOutletContext<OuletContextType>();
    return <>
        <h1 className="text-3xl font-bold underline">
            <p>User is {isLoggedIn ? "logged in" : "not logged in"}</p>
            <p>Dark mode is {isDarkMode ? "enabled" : "disabled"}</p>
        </h1>
        {isLoggedIn ? <LoggedInComponent /> : <LoggedOutComponent />}


    </>
}

export default Home;