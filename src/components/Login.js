import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function Login() {
    const [loginValues, setLoginValues] = useState({
        username: '', 
        password: ''
    });
    const { push } = useHistory();

    //HELPER FUNCTIONS
    const login = (evt) =>{
        evt.preventDefault();
        axiosWithAuth()
        .post('/api/auth/login', loginValues)
        .then((res) =>{
            console.log(res.data)
            window.localStorage.setItem('token', res.data.token)
            push('/items')//will go to page with listing of items
        })
        .catch(err => {
            console.log(err); 
        })
    }
    
    const onChange = (e) => {
        setLoginValues({
          ...loginValues,
          [e.target.name]: e.target.value 
        })}
    
return (
 <div>
     <form
     onSubmit= {login}>
    <input 
        type="text"            
        value={loginValues.username}
        onChange={onChange}
        name='username'
        placeholder= "Enter username to login"/>
    <input 
        type="text" 
        placeholder= "Enter password to login"
        name='password'
        value= {loginValues.password}
        onChange= {onChange}
        />
    <button>Login</button>
    </form>
</div>

)}