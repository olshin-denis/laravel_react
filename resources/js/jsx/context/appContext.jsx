import React, {createContext, useEffect, useState} from 'react';
import {
    LOG_IN_FORM, LOGGED_IN,
    NOT_LOGGED_IN, SIGN_UP_FORM
} from "../constant/authStatus"

export const AppContext = React.createContext();

export const AppProvider = (props) => {

    let hostName = 'http://laravel.sigma/';

    const [authStatus, setAuthStatus] = useState(NOT_LOGGED_IN);
    const [errorMessage, setErrorMessage] = useState("");
    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState("");
    const [userNameInput, setUserNameInput] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [user, setUser] = useState('false');
    const [users, setUsers] = useState();
    const [data, setData] = useState();

    function changeAuthStatusLogin() {
        setAuthStatus(LOG_IN_FORM);
    }

    function changeAuthStatusSignup() {
        setAuthStatus(SIGN_UP_FORM);
    }

    function changeMenuStatus(){
        setAuthStatus(NOT_LOGGED_IN);
    }

    function handleUserNameInput(changeEvent) {
        let updatedUserName = changeEvent.target.value;
        setUserNameInput(updatedUserName);
    }

    function handleUserEmail(changeEvent) {
        let updatedUserEmail = changeEvent.target.value;
        setUserEmail(updatedUserEmail);
    }

    function handleUsersPassword(changeEvent) {
        let updatedUserPassword = changeEvent.target.value;
        setUserPassword(updatedUserPassword);
    }

    useEffect(() => {
        let hostName = 'http://laravel.sigma/';
        axios.default.withCredentials = true;
        axios.get(hostName + 'api/user').then((response) => {
            setUser(response.data.name)
            setData(response.data.id)
            if (response.data !== "") {
                // console.log(response.data.name)
                return (
                    setAuthStatus(LOGGED_IN)
                )
            } else {
                // console.log(response)
                return null
            }
        });
        getUsers();
    },[])

    const getUsers = () => {
        axios.get(hostName + 'api/walls').then(function (response) {
            // console.log(response.data.users)
            setUsers(response.data)
        })
    }


    const signup = () => {
        axios.default.withCredentials = true;
        // CSRF COOKIE
        axios.get(hostName + "sanctum/csrf-cookie").then(
            (response) => {
                console.log(response)
                //    SIGN / REGISTER
                let data = {
                    name: userNameInput,
                    email: userEmail,
                    password: userPassword,
                };
                axios
                    .post(hostName + 'api/register', {...data})
                    .then(
                        (response) => {
                            console.log(response);
                            // GET USER
                            axios.get(hostName + 'api/user').then(
                                (response) => {
                                    console.log(response)
                                    setUserId(response.data.id);
                                    setData(response.data);
                                    setUser(response.data.name);
                                    setErrorMessage("");
                                    setAuthStatus(LOGGED_IN);
                                },
                                // GET USER ERROR
                                (error) => {
                                    setErrorMessage("Could not complete the sign up");
                                }
                            );
                        },
                        // SIGN ERROR
                        (error) => {
                            if (error.response.data.errors.name) {
                                setErrorMessage(error.response.data.errors.name[0]);
                            } else if (error.response.data.errors.email) {
                                setErrorMessage(error.response.data.errors.email[0]);
                            } else if (error.response.data.errors.password) {
                                setErrorMessage(error.response.data.errors.password[0]);
                            } else if (error.response.data.message) {
                                setErrorMessage("Could not complete the sign up");
                            }
                        }
                    );
            },
            // COOKIE ERROR
            (error) => {
                setErrorMessage("Could not complete the sign up");
            }
        );
    }

    const login = () => {
        axios.default.withCredentials = true;
        //    CSRF COOKIE
        axios
            .get(hostName + "sanctum/csrf-cookie").then(
            (response) => {
                console.log(response);
                //    LOGIN
                let data = {
                    email: userEmail,
                    password: userPassword,
                }
                axios
                    .post(hostName + "api/login", {...data})
                    .then((response) => {
                            console.log(response)
                            console.log('In')
                            // GET USER
                            axios
                                .get(hostName + "api/user")
                                .then((response) => {
                                        // console.log(response.data.name);
                                        setUserId(response.data.id);
                                        setData(response.data)
                                        setUser(response.data.name);
                                        setErrorMessage("");
                                        setAuthStatus(LOGGED_IN);
                                    },
                                    // GET USER ERROR
                                    (error) => {
                                        setErrorMessage("Could not complete the login");
                                    }
                                ).catch(e => {
                                console.log(e.response);
                            });
                        },
                        // LOGIN ERROR
                        (error) => {
                            if (error.response) {
                                setErrorMessage(error.response.data.message);
                            } else {
                                setErrorMessage("Ошибка входа");
                            }
                        }
                    );
            },
            // COOKIE ERROR
            (error) => {
                setErrorMessage("Не может войти");
            }
        );
    };

    function logout() {
        axios.default.witchCredentials = true;
        axios.get(hostName + "api/logout");
        setUserId(0);
        setUser('false');
        setUserNameInput("");
        setUserEmail("");
        setUserPassword("");
        setAuthStatus(NOT_LOGGED_IN);
    }


    return (
        <AppContext.Provider
            value={{
                setAuthStatus,
                authStatus,
                changeAuthStatusLogin,
                changeAuthStatusSignup,
                changeMenuStatus,
                userId,
                userName,
                userNameInput,
                userEmail,
                userPassword,
                handleUserNameInput,
                handleUserEmail,
                handleUsersPassword,
                signup,
                login,
                logout,
                errorMessage,
                user,
                users,
                data,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default {AppContext, AppProvider};
