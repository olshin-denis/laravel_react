import React, {useEffect, useState} from 'react';

const Delete = ({id, getDelete}) => {
    let hostName = 'http://laravel.sigma/';

    // useEffect(()=>{
    //     console.log(id)
    // },[])

    const del = (e) => {
        e.preventDefault()
        axios.delete(hostName + `api/wall/delete/${id}`).then(res => {
            // console.log(res.data.post)
            getDelete(res.data.post)
        })
            .catch((e) => {
                console.log("Ошибка", e)
            })
    }
    return (
        <form onSubmit={del}>
            <button type="submit">Delete</button>
        </form>
    );
};

export default Delete;
