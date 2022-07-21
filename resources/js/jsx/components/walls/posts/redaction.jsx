import React, {useContext, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../../../context/appContext";

const Redaction = ({user}) => {
    const appContext = useContext(AppContext)
    const {
        data,
    } = appContext;
    const {id} = useParams();
    const [reduction, setReduction] = useState();
    const [title, setTitle] = useState();
    const [text, setText] = useState();
    const navigate = useNavigate();
    const iden = data.id

    useState(() => {
        reduct()
        // console.log(id)
        // console.log(reduction)
    }, [])

    function changeTitle(change) {
        let title = change.target.value
        setTitle(title)
    }

    function changeText(change) {
        let text = change.target.value
        setText(text)
    }

    function reduct() {
        // e.preventDefault()
        let hostName = 'http://laravel.sigma/';
        axios.get(hostName + `api/wall/post/${id}`).then(res => {
            setReduction(res.data.post)
            // console.log(res.data.post)
        })
    }

    const red = (e) => {
        e.preventDefault()
        if (reduction) {
            let hostName = 'http://laravel.sigma/';
            // console.log(reduction)
            let data = {
                title: title,
                text: text,
            }
            let red = reduction.wall_id
            console.log(red)
            // console.log(data)
            axios.post(hostName + `api/wall/post/${id}`, {...data}).then((res) => {
                // console.log(data)
                // console.log(res.data.post)
                navigate(`../wall/${red}`);
                // console.log(iden)
            })
            setText('')
            setTitle('')
            // navigate(hostName + `/wall/${user}`)
        }
    }

    const post = () => {
        if (reduction) {

            return (
                <>
                    <form onSubmit={red} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
                        <div>
                            <input
                                type="text"
                                name="title"
                                placeholder="title"
                                defaultValue={reduction.title}
                                onChange={changeTitle}
                            >
                                {/*{console.log(reduction.title)}*/}
                                {/*{console.log(title)}*/}
                            </input>
                        </div>
                        <div>
                    <textarea
                        name="text"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="text"
                        defaultValue={reduction.text}
                        onChange={changeText}
                    >
                         {/*{console.log(reduction.text)}*/}
                        {/*{console.log(text)}*/}
                    </textarea>
                        </div>
                        <button type="submit">Редактировать</button>
                    </form>

                </>
            )
        }
    }


    return (
        <>
            {post()}
        </>
    );
};

export default Redaction;
