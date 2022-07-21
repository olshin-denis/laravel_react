import React, {useContext, useEffect, useState} from 'react';
import classes from "./home.module.scss"
import Delete from "./walls/posts/delete";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";

const Home = () => {
    let hostName = 'http://laravel.sigma/';

    const appContext = useContext(AppContext)
    const {
        user,
    } = appContext;
    const [users, setUsers] = useState()

    useEffect(() => {
        getUsers()
    }, [])


    const getUsers = () => {
        axios.get(hostName + 'api/walls').then(function (response) {
            // console.log(response.data.users)
            setUsers(response.data)
        })
    }

    const names = () => {
        if (users) {
            let set = users
            // console.log(set)
            let result = set.users.map(({id, name, wall}) => {
                let s = [wall]
                // console.log(wall)
                // console.log(name)
                let x = s.map(({user_id})=>{
                    return (
                        <div key={id} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
                            <div>ID:{user_id} </div>
                            <Link to={`/${user_id}`}> NAME: {name}</Link>
                        </div>
                    )
                })
                return x
                // return (
                //     <div key={id} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
                //         <div>ID:{id} </div>
                //         <Link to={`/${name}`}>NAME: {name}</Link>
                //     </div>
                // )
            })
            return result
        }
    }

    return (
        <div className={`${classes.color}`}>
            {names()}
        </div>
    );
}

export default Home;
