import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Posts from "./posts/posts";
import Delete from "./posts/delete";
import {AppContext} from "../../context/appContext";
import WallPost from "./posts/wallPost";

const Wall = () => {
        const {id} = useParams()
        const appContext = useContext(AppContext)
        const {
            user,
            userId,
            data,
        } = appContext;
        const [post, setPost] = useState();

        // const iden = data.id

    

        useEffect(() => {
            getId()
            getPosts();
            // console.log(`user: ${user}`)
            // console.log(`data: ${data}`)
            // console.log(`userId: ${userId}`)
            // console.log(`getId: ${getId()}`)
        }, [])


        function getId() {
            if (user !== 'false' && userId ===0) {
                return data
            } else if(user !== 'false' && userId !==0) {
                return data.id
            } else if (user === 'false' && userId !==0){
                return userId
            }else if (user === 'false' && userId ===0){
                return userId
            }
        }

        function getPosts() {
            axios.get(`../api/wall/${id}`).then(res => {
                // console.log(res.data.wall)
                setPost(res.data.wall)
            })
        }


        function getPost(Post) {
            getPosts()
        }

        function getDelete(del) {
            getPosts()
        }

        const posts = () => {
            // console.log(post)
            if (post) {
                // console.log(post)
                const sc = post
                let s = sc.filter((n) => {
                    return n.wall_id === n.author_id
                })
                // console.log(s)
                let restav = s.map(({id, text, title, author_id, wall_id}) => {
                    // console.log(id)
                    return (
                        <div key={id} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
                            <div key={id}> {id}</div>
                            <div> Author_id: {author_id} </div>
                            <div> Wall_id: {wall_id} </div>
                            <div>{title}</div>
                            <div>{text}</div>
                            {/*{console.log(userId)}*/}
                            {getId() === author_id ?
                                <>
                                    <Delete getDelete={getDelete} id={id}/>
                                    <Link to={`/wall/post/${id}`}>
                                        <button>Редактировать пост пост</button>
                                    </Link>
                                </>
                                :
                                null
                            }
                            {/*<Link to={`/wall/post/${id}`}>*/}
                            {/*    <button>Редактировать пост пост</button>*/}
                            {/*</Link>*/}
                        </div>
                    )
                })
                return restav
            } else {
                return null
                // return console.log('Где-то ошибка')
            }
        }

        const messages = () => {
            if (post) {
                const sc = post
                let x = sc.filter((n) => {
                    return n.wall_id !== n.author_id
                })
                let xserx = x.map(({id, text, title, author_id, wall_id}) => {
                    // console.log(id)
                    // let x = posts.map(({id, text, title, wall_id}) => {
                    // console.log(id)
                    return (
                        <div key={id} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
                            <div key={id}> {id}</div>
                            <div> Author_id: {author_id} </div>
                            <div> Wall_id: {wall_id} </div>
                            <div>{title}</div>
                            <div>{text}</div>
                            {/*{console.log(author_id)}*/}
                            {getId() === author_id ?
                                <>
                                    <Delete getDelete={getDelete} id={id}/>
                                    <Link to={`/wall/post/${id}`}>
                                        <button>Редактировать пост пост</button>
                                    </Link>
                                </>
                                :
                                null
                            }
                        </div>
                    )
                })
                return xserx
            }
        }

        const access = () => {
            // console.log(id)
            if (post) {
                if (getId() === id) {
                    return <Posts getPost={getPost}/>
                } else if (getId() !== 0) {
                    return <WallPost getPost={getPost} author_id={id}/>
                } else {
                    return null
                }
            }
        }

        return (
            <div>
                {posts()}
                <div> Сообщения</div>
                {messages()}
                {access()}
                {/*<WallPost getPost={getPost} author_id={id}/>*/}
            </div>
        );
    }
;

export default Wall;
