import React, {useContext, useState} from 'react';
import {AppContext} from "../../context/appContext";
import AuthMenu from "./authMenu";
import classes from "./logscss/authNotLoggedIn.module.scss";

const AuthLogout = () => {

    const appContext = useContext(AppContext);
    const {userName, logout, login, user} = appContext
    // const [user, setUser] = useState('')

    // const usl =()=>{
    //     if(login){
    //         return userName
    //     }else {
    //         return user
    //     }
    // }


    return (
        <div className={`${classes.auth}`}>
            {/*{console.log(user)}*/}
            <div>
                {/*{userName}*/}
                {/*{usl()}*/}
                {user}
            </div>
            <div>
                С нами
            </div>
            <div>
                <button
                    onClick={()=>logout()}
                >
                    Выйти
                </button>
            </div>
            <div>
                <AuthMenu loggedIn={true} />
            </div>
        </div>
    );
};

export default AuthLogout;
