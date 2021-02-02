
import './App.css';
import axios from 'axios'
import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';


export default function App() {

function itemMaker(raw){

  const data = raw.data
  return(
   <div>
     <img src= {data.picture} alt= {data.title}/>
     <h3>{data.title}</h3>
     <p>{data.price}</p>
     <p>{data.description}</p>
   </div> 
 )
}

const initialState = {
  email: "",
  password: "",
}

const [formValues, setFormValues] = useState(initialState)

const onChange = (evt) => {
  const { name, value } = evt.target
  setFormValues({
    ...formValues,
    [name]: value 
  })}




const onSubmit = evt => {
  evt.preventDefault()
  console.log(formValues)
  
}


useEffect(() => {
axios
    .get(`https://tt17-african-marketplace.herokuapp.com/items`)
    .then(res => {
      res.data.forEach(document.querySelector('.itemCard').appendChild(itemMaker(res)))
      })
     .catch(err => console.log(err))
},[])




  return (
    <div className="App">
    <div>
      <h1>Welcome to African Marketplace!</h1>
      <NavBar />
      <nav>
        <button>Not a member? Sign Up</button>
        <button >Sign In</button> 
      </nav>
      <div className= 'itemCard'>
        <Login onChange= {onChange} onSubmit= {onSubmit} values= {formValues}/>
      </div>
    </div>

    </div>
  );
};
