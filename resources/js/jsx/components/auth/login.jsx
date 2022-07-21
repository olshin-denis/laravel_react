import React, {Component, useEffect, useState} from 'react';
import WithRouter from "./navigate/withRouter";
import {useNavigate} from "react-router-dom";


// class Login extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             email: '',
//             password: '',
//         }
//     }
//
//     login = (e) => {
//         e.preventDefault();
//         let data = {
//             email: this.state.email,
//             password: this.state.password,
//         };
//
//         axios.post('api/login', {...data}).then( () => {
//             console.log(this.props)
//             this.props.navigate('/')
//         }).catch(() => {
//             alert('Чет не так =(')
//         });
//
//         console.log(data);
//     }
//
//     onValueSubmite = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//
//     render() {
//         const {email, password} = this.state
//         return (
//             <div>
//                 <form onSubmit={this.login}>
//                     <div>
//                         <input type="email" name="email" value={email} onChange={this.onValueSubmite}
//                                placeholder="email"/>
//                     </div>
//                     <div>
//                         <input type="password" name="password" value={password} onChange={this.onValueSubmite}
//                                placeholder="password"/>
//                     </div>
//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// };
//
// export default WithRouter(Login);

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    // useEffect(() => {
    //     handleSubmit();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
        }
        axios.post('api/login', {...data}).then(res => {
            // console.log(res.data)
            // props.getUser(res.data)
            navigate('/')
        })
        // const user = axios.post('/api/user', {...data}).then(gate=>{
        //     console.log('user= ', gate)
        // })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
