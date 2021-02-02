
import './App.css';
import axios from 'axios'
import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';


export default function App() {

function itemMaker(raw){

  const data = raw
  return(
   <div>
     <h3>{data.name}</h3>
     <p>{data.price}</p>
     <p>{data.description}</p>
   </div> 
 )
}

const initialState = {
  email: "",
  password: "",
  username: "",
}

const [formValues, setFormValues] = useState(initialState)

const onChange = (evt) => {
  const { name, value } = evt.target
  setFormValues({
    ...formValues,
    [name]: value 
  })}




const loginSubmit = evt => {
  evt.preventDefault()
  console.log(formValues)
  
}

axios.post(`https://tt17-african-marketplace.herokuapp.com/api/items`,
{
  name: 'Kiwano',
  description: 'commonly called the horned melon, spiked melon, jelly melon, or kiwano, is an annual vine in the cucumber and melon family, Cucurbitaceae. Its fruit has horn-like spines, hence the name "horned melon". Ripe fruit has orange skin and lime green, jelly-like flesh with a refreshingly fruity taste, and a texture similar to a passionfruit or pomegranate. ',
  price: 1.96,
})


useEffect(() => {
axios
    .get(`https://tt17-african-marketplace.herokuapp.com/api/items`)
    .then(res => {
      res.data.forEach((id) => document.querySelector('.itemCard').appendChild(itemMaker(id))
      )})
    
     .catch(err => console.log(err))
},[])




  return (
    <div className="App">
    <div>
      <h1>Welcome to African Marketplace!</h1>
      <NavBar />
      <div className= 'itemCard'>
        
      </div>
    </div>
    <Switch>
      
      <Route exact path= '/login'>
         <Login onChange= {onChange} onSubmit= {loginSubmit} values= {formValues}/>
      </Route>

      <Route exact path= '/register'>
        <Register onChange= {onChange} values= {formValues}/>
      </Route>

    </Switch>

    </div>
  );
};
