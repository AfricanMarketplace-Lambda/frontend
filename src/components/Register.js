import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Register() {
    const [registerValues, setRegisterValues] = useState({
        username: '', 
        password: ''
    });

    //HELPER FUNCTIONS
    const register = (evt) =>{
        evt.preventDefault();
        axiosWithAuth()
        .post('/api/auth/register', registerValues)
        .then((res) =>{
            window.localStorage.setItem('token', res.data)
        })
        .catch(err => {
            console.log(err); 
        })
    }
    
    const onChange = (e) => {
    setRegisterValues({
          ...registerValues,
          [e.target.name]: e.target.value 
        })}
    
return (
 <div>
     <form
     onSubmit= {register}>
    <input 
        type="text"            
        value={registerValues.username}
        onChange={onChange}
        name='username'
        placeholder= "Enter username to register"/>
    <input 
        type="text" 
        placeholder= "Enter password to register"
        name='password'
        value= {registerValues.password}
        onChange= {onChange}
        />
    <button>Register</button>
    </form>
</div>

)}