import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialLoginValues ={
    username: '',
    password: ''
}

export default function Login() {
    const [credentials, setCredentials] = useState(initialLoginValues);
    const { push } = useHistory();

    //HELPER FUNCTIONS
    const loginSubmit = (evt) =>{
        evt.preventDefault();
        axios
        .post('https://tt17-african-marketplace.herokuapp.com/api/auth/login', credentials)
        .then((res) =>{
            window.localStorage.setItem('token', res.data.token)
            setCredentials(initialLoginValues)
            push('/items')//will go to page with listing of items
        })
        .catch(err => {
            console.log(err); 
        })
    }
    
    const onChange = (e) => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value 
        })}
    
return (
 <div>
     <form onSubmit={loginSubmit}>
    <input 
        type="text"            
        value={credentials.username}
        onChange={onChange}
        name='username'
        placeholder= "Enter username to login"/>
    <input 
        type="text" 
        placeholder= "Enter password to login"
        name='password'
        value= {credentials.password}
        onChange= {onChange}
        />
    <button>Login</button>
    </form>
</div>

)}