
import './App.css';
// import axios from 'axios'
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
import Items from './components/Items'; 


export default function App() {

// function itemMaker(raw){

//   const data = raw
//   return(
//    <div>
//      <h3>{data.name}</h3>
//      <p>{data.price}</p>
//      <p>{data.description}</p>
//    </div> 
//  )
// }

// axios.post(`https://tt17-african-marketplace.herokuapp.com/api/items`,
// {
//   name: 'Kiwano',
//   description: 'commonly called the horned melon, spiked melon, jelly melon, or kiwano, is an annual vine in the cucumber and melon family, Cucurbitaceae. Its fruit has horn-like spines, hence the name "horned melon". Ripe fruit has orange skin and lime green, jelly-like flesh with a refreshingly fruity taste, and a texture similar to a passionfruit or pomegranate. ',
//   price: 1.96,
// })


// useEffect(() => {
// axios
//     .get(`https://tt17-african-marketplace.herokuapp.com/api/items`)
//     .then(res => {
//       res.data.forEach((id) => document.querySelector('.itemCard').appendChild(itemMaker(id))
//       )})
    
//      .catch(err => console.log(err))
// },[])


  return (
    <div className="App">
    <div>
      <h1>Welcome to African Marketplace!</h1>
      <NavBar />
    </div>
    <Switch>
    <Route path= '/items'>
        <Items />
      </Route>
      <Route exact path= '/login'>
         <Login/>
      </Route>
      <Route exact path= '/register'>
        <Register />
      </Route>
     <Route component={Login}/>
      <PrivateRoute exact path='/logout' component={Logout} />

    </Switch>

    </div>
  );
};

// add PrivateRoute to Home (/items)