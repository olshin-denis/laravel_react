import React, {Component, useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

// class Register extends Component {
//
//
//     state = {
//         name: '',
//         email: '',
//         password: '',
//     };
//
//
//     registration = (e) => {
//         e.preventDefault()
//         let data = {
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password,
//         }
//         // console.log(data)
//         axios.post('api/register', {...data}).then(
//             function (response) {
//                 console.log(response.data)
//             }
//         )
//     }
//
//     onValueChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//
//
//     render() {
//         const {name, email, password} = this.state;
//         return (
//             <div>
//                 <form onSubmit={this.registration}>
//                     <div>
//                         <input type="text" name="name" value={name} onChange={this.onValueChange} placeholder="name"/>
//                     </div>
//                     <div>
//                         <input type="email" name="email" value={email} onChange={this.onValueChange}
//                                placeholder="email"/>
//                     </div>
//                     <div>
//                         <input type="password" name="password" value={password} onChange={this.onValueChange}
//                                placeholder="password"/>
//                     </div>
//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     };
// }
//
// export default Register;


const Register = () => {

    const [name, setName ]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate;

    const handleSubmit = (e) =>{
        let data = {
            name:name,
            email:email,
            password:password
        }
        axios.post("api/register", {...data}).then(res=>{
            navigate('/login')
            console.log(res)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                    />
                </div>
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
    );
};

export default Register;
