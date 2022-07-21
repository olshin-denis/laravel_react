import React, {useContext} from 'react';
import AuthMenu from "./authMenu";
import {AppContext} from "../../context/appContext";
import classes from "./logscss/authNotLoggedIn.module.scss"

const AuthNotLoggedIn = ({showNoLoggedIn}) => {
    const appContext = useContext(AppContext)
    const {
        userEmail,
        userPassword,
        handleUserEmail,
        handleUserPassword,
        login,
    } = appContext

    return (
        <>
            <div className={`${classes.auth}`}>
                Не авторизован
            </div>
            <div>
                <AuthMenu loggedIn={false} />
            </div>
        </>
    );
};

export default AuthNotLoggedIn;
