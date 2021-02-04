import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button } from "@material-ui/core/index";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
      marginLeft: 30, 
      marginTop: 15
    },
    register:{
        marginLeft: 30, 
        marginTop: 30
      },
  })


export default function Register() {
    const [registerValues, setRegisterValues] = useState({
        username: '', 
        password: ''
    });
    const classes = useStyles();


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
     <form noValidate autoComplete="off" onSubmit= {register}>
     <TextField className={classes.root} id="filled-basic" variant="filled"
        type="text"            
        value={registerValues.username}
        onChange={onChange}
        name='username'
        placeholder= "Enter username"/>
     <TextField className={classes.root} id="filled-basic" variant="filled"
        type="text" 
        placeholder= "Enter password"
        name='password'
        value= {registerValues.password}
        onChange= {onChange}
        />
    <Button className={classes.register} variant="contained" color="default">Register</Button>
    </form>
</div>

)}