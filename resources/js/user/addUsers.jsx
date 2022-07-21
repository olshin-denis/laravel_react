import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function AddUsers() {
    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: '',
    })


    const data = {
        name: users.name,
        email: users.email,
        password: users.password,
    }

    axios.post('api/`register', data).then(res => {
        if (res.data.status === 200) {
            setUsers({
                name: '',
                email: '',
                password: '',
            })
        }
    });

    function handleInput(e) {
        e.persist();
        setUsers({...users, [e.target.name]: e.target.value});
    }

    function saveUsers(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={saveUsers}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleInput} value={users.name}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleInput} value={users.email}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInput} value={users.password}/>
                </div>
                <div>
                    <button type="submit">Save Student</button>
                </div>
            </form>
        </div>
    )
}

export default AddUsers;
