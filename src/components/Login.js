import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core/index";
import axios from 'axios';

const useStyles = makeStyles({
    root:{
      marginLeft: 30, 
      marginTop: 15
    },
    login:{
        marginLeft: 30, 
        marginTop: 30
      },
  })

const initialLoginValues ={
    username: '',
    password: ''
}

export default function Login() {
    const [credentials, setCredentials] = useState(initialLoginValues);
    const { push } = useHistory();
    const classes = useStyles();

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
     <form noValidate autoComplete="off" onSubmit= {loginSubmit}>
     <TextField className={classes.root} id="filled-basic" variant="filled"
        type="text"            
        value={credentials.username}
        onChange={onChange}
        name='username'
        placeholder= "Enter username"/>
     <TextField className={classes.root} id="filled-basic" variant="filled"
        type="text" 
        placeholder= "Enter password"
        name='password'
        value= {credentials.password}
        onChange= {onChange}
        />
        <Button className={classes.login} variant="contained" color="default">Login</Button>
    </form>
</div>

)}