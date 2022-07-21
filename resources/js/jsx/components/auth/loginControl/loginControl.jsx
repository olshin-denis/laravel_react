import React from 'react';
import {Link, Outlet} from "react-router-dom";

const LoginControl = () => {
    return (
        <>
            <Link to="/">Главная</Link>
            <Link to="walls">Стена постов</Link>
            <Link to="/wall/{user:name}">Стена постов пользователя</Link>
            <Link to="/wall/{user:name}/post">Написать пост</Link>
            <Link to="/wall/post/{post:id}">Редактировать пост пост</Link>
        </>
    );
};

export default LoginControl;
