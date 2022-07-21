import React, {Component, useContext, useEffect, useState} from 'react';
import {AppContext} from "../../context/appContext";
import Delete from "./posts/delete";
import {Link, useParams} from "react-router-dom";

// class Walls extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             users: '',
//             posts: ''
//         }
//     }
//
//     componentDidMount() {
//         this.getUsers();
//     }
//
//     getUsers = () => {
//         let self = this;
//         axios.get('api/walls').then(function (response) {
//             console.log(response.data)
//             self.setState({
//                 users: response.data.users
//             })
//         })
//     }
//
//
//
//     names = () => {
//         if (this.state.users) {
//             let result = this.state.users.map(({name, posts}) => {
//                 // console.log(name)
//                 let x = posts.map(({title, text, id}) => {
//                     return (
//                         <div key={id} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
//                             {name}
//                             <div>{title}{id}</div>
//                             <div>{text} </div>
//                             <div>
//                                 <a /*href="{{route('get.redaction', [$post ->id])}}"*/>Edit</a>
//                             </div>
//                             {/*@can('delete-post', $post)*/}
//                             <div>
//                                 <form /*action="{{route('post.deletePost', [$post ->id])}}"*/>
//                                     <button type="submit" > delete</button>
//                                 </form>
//                             </div>
//                         </div>
//                     )
//                 })
//                 return x /*<div>{name} {x}</div>*/
//             })
//             return result
//         }
//         return 'rwer'
//     }
//
//
//     render() {
//         return (
//             <>
//                 {this.names()}
//             </>
//         );
//
//     }
// }
//
//
// export default Walls;

const Walls = () => {
    const appContext = useContext(AppContext)
    const {
        user,
        data,
    } = appContext;
    // const [post, setPost] = useState();

    const [users, setUsers] = useState()
    // const {id}=useParams()
    const iden = data.id

    useEffect(() => {
        getUsers()
        // console.log(id)
    }, [])


    const getUsers = () => {
        axios.get('api/walls').then(function (response) {
            // console.log(response.data.users)
            setUsers(response.data)
        })
    }

    useEffect(() => {
        getPosts()
        console.log(iden)
    }, [])

    function getPosts() {
        axios.get(`../api/wall/${iden}`).then(res => {
            // console.log(res.data)
            // setPost(res.data)
        })
    }

    function getPost() {
        getPosts()
    }

    function getDelete() {
        getPosts()
    }


    const names = () => {
        if (users) {
            let set = users
            console.log(set)
            let result = set.users.map(({name, posts}) => {
                // console.log(result)
                let x = posts.map(({title, text, id}) => {
                    return (
                        <div key={id} style={{border: '1px solid black', margin: '5px', padding: '20px'}}>
                            {name}
                            <div>{title}</div>
                            <div>{text} </div>
                            <div>
                                {user === name ?
                                    <Link to={`/wall/post/${id}`}>
                                        <button>Редактировать пост пост</button>
                                    </Link>
                                    :
                                    null
                                }
                            </div>
                            <div>
                                {user === name ? <Delete getDelete={getDelete} id={id}/> : null}
                            </div>
                        </div>
                    )
                })
                return x /*<div>{name} {x}</div>*/
            })
            return result
        }
        return 'rwer'
    }


    return (
        <>
            <div>
                {names()}
            </div>
        </>
    );

}

export default Walls
