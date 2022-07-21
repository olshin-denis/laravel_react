import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/appContext";
import Delete from "./walls/posts/delete";
import {Link, useParams} from "react-router-dom";
import Posts from "./walls/posts/posts";

const   Cabinet = () => {
    let hostName = 'htt1p://laravel.sigma/';

    const {name} = useParams()
    const {user_id} = useParams()
    const appContext = useContext(AppContext)
    const {
        user,
    } = appContext;
    const [wall, setWall] = useState();

    useEffect(() => {
        getPosts()
    }, [])

    function getPosts() {
        axios.get(`../api/${user_id}`).then(res => {
            // console.log(res.data)
            setWall(res.data.wall)
        })
    }



    const links = () =>{
        // console.log(wall)
        if(wall){
            // console.log(wall)
            const s = [wall]
            let res = s.map(({id})=>{
                return(
                    <Link key={id} to={`../wall/${id}`}>{id}</Link>
                )
            })
            return res
        }
    }

    return (
        <div style={{fontSize: '20px'}}>
            {/*{posts()}*/}
            {/*{user === name?*/}
            {/*    <Posts getPost={getPost} user={user}/>*/}
            {/*    :*/}
            {/*    null*/}
            {/*}*/}
            {links()}
        </div>
    );
};

export default Cabinet;
