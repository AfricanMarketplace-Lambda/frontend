
import React from 'react'

export default function Login(props) {

    const {onChange, onSubmit, values} = props
    



return (
 <div>
     <form
     onSubmit= {onSubmit}>
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