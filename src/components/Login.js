import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


const credentials={
    username: '',
    password: ''
}

export default function Login() {
    const [loginValues, setLoginValues] = useState(credentials);
    const { push } = useHistory();

    //HELPER FUNCTIONS
    const login = (evt) =>{
        evt.preventDefault();
        axiosWithAuth().post('/api/auth', credentials)
        .then((res) =>{
            localStorage.setItem('token', res.data.token)
            push('')//will go to page with listings of items
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