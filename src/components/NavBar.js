import React from "react";
import { NavLink, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register'; 
import Logout from './Logout'; 

const NavBar = () => {
  return (
<>
    <div className="navbar">
      {/* <NavLink className="home" to="/">
        Home
      </NavLink> */}

      <NavLink className="login" to="/login">
        Login
      </NavLink>

      <NavLink className="register" to="/register">
        Register
      </NavLink>

      <NavLink className="logout" to="/logout">
        Logout
      </NavLink>
    </div>
    <Route exact path='/login'>
    <Login />
    </Route>
    <Route path='/register'>
    <Register />
    </Route>
    <Route path='/logout'>
    <Logout />
    </Route>
</>
  );
};

export default NavBar;
