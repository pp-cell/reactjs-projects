import React, { useState } from 'react'

function Signup() {
    const [data,setData]=useState({username:'',email:'',password:'',confirmpassword:'',});
    const{username,email,password,confirmpassword}=data;
  const handle=e =>{
          setData({...data,[e.target.name]:e.target.value});
  }
  const handleSubmit=e=>{
    e.preventDefault();
    if(username.length<=5)
        {
            alert("more than 5 characters");
        }
        else if(password!==confirmpassword)
            {
                alert("confirmpassword are not equal to password");
            }
            else
            {
                console.log(data);
            }
  }
  return (
    <div>
      <center>
        <form autoComplete='off' onSubmit={handleSubmit}>
        <label>username:
            <input type='text' name='username'  value={username} onChange={handle}/>
        </label><br/>
        <label>email:
            <input type='email' name='email' value={email} onChange={handle}/>
        </label><br/>
        <label>password:
            <input type='password' name='password' value={password} onChange={handle}/>
        </label><br/>
        <label>confirmpassword:
            <input type='password' name='confirmpassword' value={confirmpassword} onChange={handle}/>
        </label><br/>
        <input type='submit' name='submit'/>
        </form>
      </center>
    </div>
  )
}

export default Signup
