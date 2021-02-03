import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


const initialLoginValues={
    username: '',
    password: ''
}


export default function Login(props) {
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const { push } = useHistory();

    const {onChange, onSubmit, values} = props

    const login = (evt) =>{
        evt.preventDefault();
        axiosWithAuth().post('/api/auth', credentials)
        .then((res) =>{
            localStorage.setItem('token', res.data.token)
            push('')//will go to page with listings of items
        })
    }
    



return (
 <div>
     <form
     onSubmit= {onSubmit}>
    <input 
        type="text"            
        value={values.username}
        onChange={onChange}
        name='username'
        placeholder= "Username"/>
    <input 
        type="text" 
        placeholder= "Password"
        name='password'
        value= {values.password}
        onChange= {onChange}
        />
    <button>Submit</button>
    </form>
</div>

)}