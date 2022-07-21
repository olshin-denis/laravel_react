import React, {useContext, useState} from 'react';
import {LOG_IN_FORM, LOGGED_IN, NOT_LOGGED_IN, SIGN_UP_FORM} from "../../constant/authStatus";
import AuthNotLoggedIn from "./authNotLoggedIn";
import AuthLogin from "./authLogin";
import AuthSignup from "./authSignup";
import AuthLogout from "./authLogout";
import {AppContext} from "../../context/appContext";

const AuthContainer = ({user}) => {
    const appContext = useContext(AppContext);
    const {
        authStatus
    } = appContext;
    const showNoLoggedIn = authStatus === NOT_LOGGED_IN ? "see" : "hidden";
    const showLoginForm = authStatus === LOG_IN_FORM ? "see" : "hidden";
    const showSignUpForm = authStatus === SIGN_UP_FORM ? "see" : "hidden";
    const showLoggedIn = authStatus === LOGGED_IN ? "see" : "hidden";


    return (
        <div>
            <div className={showNoLoggedIn}>
                {authStatus === NOT_LOGGED_IN ? <AuthNotLoggedIn /> : null}
                {/*{loger()}*/}
            </div>

            <div className={showLoginForm}>
                {authStatus === LOG_IN_FORM ? <AuthLogin option="login"/> : null}
            </div>

            <div className={showSignUpForm}>
                {authStatus === SIGN_UP_FORM ? <AuthSignup option="signup"/> : null}
            </div>

            <div className={showLoggedIn}>
                {authStatus === LOGGED_IN ? <AuthLogout user={user} /> : null}
            </div>
        </div>
    );
};

export default AuthContainer;
