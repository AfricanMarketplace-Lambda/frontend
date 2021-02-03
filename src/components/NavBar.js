import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{

    return(
        <div className='navbar'>

        <NavLink className= 'home' to= "/">
           Home
        </NavLink>
        
        <NavLink className='login' to='/login'>
            Login
        </NavLink>

        <NavLink className='register' to='/register'>
            Register
        </NavLink>

        <NavLink className='logout' to='/logout'>
            Logout
        </NavLink>
        
        </div>
    )
};

export default NavBar;