import React, {useContext} from 'react';
import {AppContext} from "../../context/appContext";
import classes from "./logscss/authMenu.module.scss"
import {NOT_LOGGED_IN, SIGN_UP_FORM} from "../../constant/authStatus";

const AuthMenu = (props) => {
    const appContext = useContext(AppContext);
    const {
        authStatus,
        changeAuthStatusLogin,
        changeAuthStatusSignup,
        changeMenuStatus,
    } = appContext;
// console.log(props.loggedIn)

    const btn = () =>{
        if(authStatus===NOT_LOGGED_IN){
            return(
                <button
                className={`${classes.button}`}
                onClick={() => changeAuthStatusLogin()}
            >
                Вход
            </button>
            )
        }else{
            return(
                    <button
                        className={`${classes.button}`}
                        onClick={() => changeMenuStatus()}
                    >
                        Назад
                    </button>
                )

        }
    }

    const reg = () =>{
        if(authStatus=== SIGN_UP_FORM){
            return (
                <button
                    className={`${classes.button}`}
                    onClick={() => changeAuthStatusLogin()}
                >
                    Вход
                </button>
            )
        }else {
            return (
                <button
                    className={`${classes.button}`}
                    onClick={() => changeAuthStatusSignup()}
                >
                    Регистрация
                </button>
            )
        }
    }

    return (
        <>
            {/*<div>*/}
            {/*    /!*Аутентификация*!/*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    /!*Using Laravel Sanctum*!/*/}
            {/*</div>*/}
            {props.loggedIn ? null : (
                <div className={`${classes.auth}`}>
                    {reg()}
                    {btn()}
                </div>
            )}
        </>
    );
};

export default AuthMenu;
