import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import Home from "./home";
import Register from "./auth/register";
import Login from "./auth/login";
import Walls from "./walls/walls";
import Wall from "./walls/wall";
import Posts from "./walls/posts/posts";
import Redaction from "./walls/posts/redaction";
import {AppContext} from "../context/appContext";
import {NOT_LOGGED_IN} from "../constant/authStatus";
import Cabinet from "./cabinet";
import WallPost from "./walls/posts/wallPost";


const AppRoutes = () => {
    let hostName = 'http://laravel.sigma/';

    // const [user, setName]=useState('')
    // useState(() => {
    //     let hostName = 'http://laravel.sigma/';
    //     axios.default.withCredentials = true;
    //     axios.get(hostName + 'api/user').then((response) => {
    //         // console.log(response.data)
    //         setName(response.data)
    //     })
    //
    // })

    const appContext = useContext(AppContext)
    const {
        user,
        users,
    } = appContext;


    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*{names()}*/}
                {/*<Route path="/:name" element={<Cabinet/>}/>*/}
                <Route path="/:user_id" element={<Cabinet/>}/>
                {/*<Route path="/register" element={<Register/>}/>*/}
                {/*<Route path="/login" element={<Login getUser={props.getUser}/>}/>*/}
                <Route path="walls" element={<Walls/>}/>
                <Route path={`wall/:id`} element={<Wall/>}/>
                <Route path={`wall/:id/post`} element={<WallPost/>}/>
                <Route path="wall/:name/post" element={<Posts/>}/>
                <Route path="wall/post/:id" element={<Redaction user={user}/>}/>
                {/*<Route path="wall"*/}
            </Routes>
    );
};

export default AppRoutes;
