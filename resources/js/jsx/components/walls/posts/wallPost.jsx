import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../../context/appContext";
import {useParams} from "react-router-dom";

const WallPost = ({getPost}) => {
    const appContext = useContext(AppContext)
    const {
        user,
        data,
    } = appContext;

    let hostName = 'http://laravel.sigma/';
    const [title, setTile] = useState('');
    const [text, setText] = useState('');
    // const iden = data.id
    const {id} = useParams()

    // useEffect(() => {
        // console.log(wall_id)
        // console.log(id)
    // },[])

    function writeTitle(write) {
        let title = write.target.value;
        setTile(title)
    }

    function writeText(write) {
        let text = write.target.value;
        setText(text)
    }

    const post = (e) => {
        e.preventDefault()
        let data = {
            title: title,
            text: text,
        }
        axios.post(hostName + `api/wall/${id}/post`, {...data}).then(response => {
            getPost(response.data)
            // console.log(response)
        })
        setTile('');
        setText('');
    }

    return (
        <form onSubmit={post} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
            <div>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={writeTitle}
                />
            </div>
            <div>
                    <textarea
                        name="text"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="text"
                        value={text}
                        onChange={writeText}
                    ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default WallPost;
