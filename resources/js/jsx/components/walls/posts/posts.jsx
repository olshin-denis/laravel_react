import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../../context/appContext";

const Posts = ({getPost}) => {
    const appContext = useContext(AppContext)
    const {
        user,
    } = appContext;

    let hostName = 'http://laravel.sigma/';
    const [title, setTile] = useState('');
    const [text, setText] = useState('');

    function writeTitle(write) {
        let title = write.target.value;
        setTile(title)
    }

    function writeText(write) {
        let text = write.target.value;
        setText(text)
    }

    // useEffect(() => {
    //     console.log(user)
    // },[])

    const post = (e) => {
        e.preventDefault()
        let data = {
            title: title,
            text: text,
        }
        axios.post(hostName + `api/post/${user}/post`, {...data}).then(response => {
            getPost(response.data)
            // console.log(response)
        })
        setTile('');
        setText('');
    }

    return (
        <form onSubmit={post} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
            {/*<div style={{border: '1px solid black', margin: '5px', padding: '20px'}}>*/}
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
                {/*<button onClick={()=>post()}>Submit</button>*/}
                <button type="submit">Submit</button>
            {/*</div>*/}
        </form>
    );
};

export default Posts;
