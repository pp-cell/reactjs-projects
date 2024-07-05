import React from 'react'
import { useState } from "react";


function Login()
{
    const[inputs,setInputs]=useState({});
    const handle=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}));
    }
    const submit=(event)=>{
        event.preventDefault()
        console.log(inputs);
    }
    return (
        <>
        <h1>how are you</h1>
        <form onSubmit={submit}>
        <label>UserName:
            <input type="text" name="username"
             value={inputs.username || ""} onChange={handle} />
        </label>
        <label>Password:
            <input type="password"  name="password" value={inputs.password || ""} onChange={handle}/>
         </label>
         <input type="submit" />
        </form>
      </>
    )
}
export default Login;