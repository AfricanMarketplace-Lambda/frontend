import React from 'react'

export default function Register(props) {

    const {onChange, values} = props

return (
 <div>
     <form
     >

    <input 
        type="text"            
        value={values.username}
        onChange={onChange}
        name='username'
        placeholder= "Username"/>
    <input 
        type="email"            
        value={values.email}
        onChange={onChange}
        name='email'
        placeholder= "Email"/>
    <input 
        type="text" 
        placeholder= "Password"
        name='password'
        value= {values.password}
        onChange= {onChange}
        />
    <button>Submit</button>
    </form>
</div>

)}