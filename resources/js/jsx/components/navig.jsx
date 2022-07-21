import React, {useContext, useEffect, useState} from 'react';
import {Link, Outlet, Route} from "react-router-dom";
import AuthControll from "./auth/loginControl/authControll";
import LoginControl from "./auth/loginControl/loginControl";
import AuthContainer from "./authComponents/authContainer";
import {AppContext, AppProvider} from "../context/appContext";
import {LOGGED_IN, NOT_LOGGED_IN} from "../constant/authStatus";
import classes from "./walls/navigate.module.scss"

const Navig = () => {


    const appContext = useContext(AppContext)
    const {
        setAuthStatus,
        authStatus,
        user,
        data,
        userId,
    } = appContext;

    useEffect(()=>{
        getId();
    })

    function getId() {
        if (user !== 'false' && userId ===0) {
            return data
        } else if(user !== 'false' && userId !==0) {
            return data.id
        } else if (user === 'false' && userId !==0){
            return userId
        }else if (user === 'false' && userId ===0){
            return userId
        }
    }

    const except = () => {
        if (authStatus === LOGGED_IN) {
            return (
                <>
                    {/*{console.log(user)}*/}
                    {/*<nav className={`${classes.links}`}>*/}
                        <Link className={`${classes.link}`} to="/">Главная</Link>
                        <Link className={`${classes.link}`} to="walls">Стена постов</Link>
                        {/*<Link className={`${classes.link}`} to={`/wall/${user}`}>Стена постов пользователя</Link>*/}
                        <Link className={`${classes.link}`} to={`/wall/${getId()}`}>Написать пост</Link>
                    {/*</nav>*/}
                </>

            )
        } else {
            return (
                <>
                   {/*<nav className={`${classes.linkO}`}>*/}
                    <Link className={`${classes.link}`} to="/">Главная</Link>
                    {/*</nav>*/}
                </>


            )
        }
    }


    return (
        <>
            <div className={`${classes.nav}`}>
                <div className={`${classes.position}`}>
                    <AuthContainer user={user}/>
                </div>
                <div className={`${classes.auth}`}>
                    {/*{console.log(user)}*/}
                    <nav className={`${classes.links}`}>
                        {except()}
                        {/*{success()}*/}
                    </nav>

                </div>
                <Outlet/>
            </div>
        </>
    );
};

export default Navig;
