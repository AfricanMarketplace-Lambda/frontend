import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
import Items from './components/Items'; 
import ItemForm from './components/ItemsForm';
import UpdateForm from './components/UpdateForm';

export default function App() {

  return (
    <div className="App">
      <div>
        <h1>Welcome to African Marketplace!</h1>
        <NavBar />
      </div>
      <Switch>
        <Route path="/update-items/:id" component={UpdateForm} />
        <Route path='/add-item' component={ItemForm} />
        <Route path="/items" component={Items} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </div>
  );
};

// add PrivateRoute to Home (/items)