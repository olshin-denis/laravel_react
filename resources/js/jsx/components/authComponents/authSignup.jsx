import React, {useContext, useState} from 'react';
import {AppContext} from "../../context/appContext";
import AuthMenu from "./authMenu";
import classes from "./logscss/authMenu.module.scss";

const AuthSignup = () => {
    const appContext = useContext(AppContext)
    const {
        userNameInput,
        userEmail,
        userPassword,
        handleUserNameInput,
        handleUserEmail,
        handleUsersPassword,
        signup,
        errorMessage,
    } = appContext;
    const [hidePassword, setHidePassword] = useState(true);
    const showHiddenPassword = hidePassword ? "" : "hidden";
    const showRevealedPassword = hidePassword ? "hidden" : "";

    function togglePassword() {
        setHidePassword(!hidePassword);
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
                        Регистрация
                    </div>
                    {/*USER NAME*/}
                    <input
                        className={`${classes.button}`}
                        name="userName"
                        type="text"
                        placeholder="User Name"
                        value={userNameInput}
                        onChange={handleUserNameInput}
                    />
                    {/*EMAIL*/}
                    <input
                        className={`${classes.button}`}
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={userEmail}
                        onChange={handleUserEmail}
                    />
                    {/*HIDDEN PASSWORD*/}
                    {hidden()}
                    {/*REVEALED PASSWORD*/}
                    {see()}
                    {/*SUBMIT BUTTON*/}
                    <div>
                        <button
                            className={`${classes.button}`}
                            onClick={() => signup()}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                    <div>
                        {errorMessage}
                    </div>
                    <div>
                        <AuthMenu loggedIn={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthSignup;
