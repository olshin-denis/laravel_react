import React, {useContext, useState} from 'react';
import AuthMenu from "./authMenu";
import {AppContext} from "../../context/appContext";
import classes from "./logscss/authMenu.module.scss";

const AuthLogin = () => {
    const appContext = useContext(AppContext)
    const {
        userEmail,
        userPassword,
        handleUserEmail,
        handleUsersPassword,
        login,
        errorMessage,
    } = appContext;
    const [hidePassword, setHidePassword] = useState(true);
    const showHiddenPassword = hidePassword ? "" : "hidden";
    const showRevealedPassword = hidePassword ? "hidden" : "";

    function togglePassword() {
        setHidePassword(!hidePassword)
    }

    function hidden() {
        if (hidePassword === true) {
            return null
        } else {
            return (
                <>
                    <input
                        className={`${classes.button}`}
                        name="password"
                        type="text"
                        placeholder="Password"
                        value={userPassword}
                        onChange={handleUsersPassword}
                    />
                    <button
                        className={`${classes.button}`}
                        onClick={() => togglePassword()}
                    >
                        Скрыть пароль
                    </button>
                </>
            )
        }
    }

    function see() {
        if (hidePassword === true) {
            return (
                <>
                    <input
                        className={`${classes.button}`}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={handleUsersPassword}
                    />
                    <button
                        className={`${classes.button}`}
                        onClick={() => togglePassword()}
                    >
                        Показать пароль
                    </button>
                </>
            )
        } else {
            return null
        }
    }

    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.cont}`}>
                <div className={`${classes.text}`}>
                    <div>
                        Войти
                    </div>
                    {/*EMAIL*/}
                    <div
                        className={`${classes.authLogin}`}
                    >
                        <input
                            className={`${classes.button}`}
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={userEmail}
                            onChange={handleUserEmail}
                        />
                        {see()}
                        {/*REVEALED PASSWORD*/}
                        {hidden()}
                        {/*Submit*/}
                        <button
                            className={`${classes.button}`}
                            onClick={() => login()}
                        >
                            Войти
                        </button>
                    </div>
                </div>
                <div>
                    {errorMessage}
                </div>
                <div>
                    <AuthMenu loggedIn={false}/>
                </div>
            </div>
        </div>
    );
};

export default AuthLogin;
