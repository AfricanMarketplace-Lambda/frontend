import './App.css';
import axios from 'axios'

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



axios
    .get(`https://tt17-african-marketplace.herokuapp.com/items`)
    .then(res => {
      res.data.forEach(document.querySelector('.itemCard').appendChild(itemMaker(res)))
      })
     .catch(err => console.log(err))





function App() {
  return (
    <div className="App">
    <div>
      <h1>Welcome to African Marketplace!</h1>
      <nav>
        <button>Not a member? Sign Up</button>
        <input type="text" placeholder= 'Username'/>
        <input type="text" placeholder= "Password"/> 
        <button>Sign In</button> 
      </nav>
      <div className= 'itemCard'>
      </div>
    </div>

    </div>
  );
}

export default App;
