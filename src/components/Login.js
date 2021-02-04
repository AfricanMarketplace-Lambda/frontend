import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core/index";

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

export default function Login() {
    const [loginValues, setLoginValues] = useState({
        username: '', 
        password: ''
    });
    const { push } = useHistory();
    const classes = useStyles();

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
     <form noValidate autoComplete="off" onSubmit= {login}>
     <TextField className={classes.root} id="filled-basic" variant="filled"
        type="text"            
        value={loginValues.username}
        onChange={onChange}
        name='username'
        placeholder= "Enter username"/>
     <TextField className={classes.root} id="filled-basic" variant="filled"
        type="text" 
        placeholder= "Enter password"
        name='password'
        value= {loginValues.password}
        onChange= {onChange}
        />
        <Button className={classes.login} variant="contained" color="default">Login</Button>
    </form>
</div>

)}