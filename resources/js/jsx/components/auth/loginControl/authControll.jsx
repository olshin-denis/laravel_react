import React from 'react';
import {Link, Outlet} from "react-router-dom";
import LoginControl from "./loginControl";

const AuthControll = () => {
    return (
        <>

            <Outlet/>
        </>
    );
};

export default AuthControll;
