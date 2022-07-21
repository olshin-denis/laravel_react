import {BrowserRouter} from "react-router-dom";
import Navig from "./components/navig";
import AppRoutes from "./components/routes";
import {useEffect, useState} from "react";
import {AppProvider} from "./context/appContext"
import AuthContainer from "./components/authComponents/authContainer";

const App = () => {
    // const [user, setUser] = useState({
    //     name: null,
    //     id: null
    // })
    //
    // const getUser = (newUser) => {
    //     // console.log(newUser)
    //     setUser(
    //         newUser
    //     )
    //     // console.log(user)
    // }

    return (
        <>
            <BrowserRouter>
                <AppProvider>
                    <Navig /*user={user}*//>
                    <AppRoutes/* getUser={getUser}*//>
                </AppProvider>
            </BrowserRouter>
        </>
    );
};

export default App;

