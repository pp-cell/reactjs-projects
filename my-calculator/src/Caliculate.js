import React from 'react'
import { useState } from 'react';
function Caliculate() {
    const[inputs,setInputs]=useState('');
    const[result,setResult]=useState(0);
    const handle=e=>{
        setInputs(e.target.value);
    }
  return (
    <div>
        <center>
      <input type='text' name='inputs' value={inputs} onChange={handle}/>
      <button onClick={()=>setResult(eval(inputs))}>Result:</button>
        <h2>{result}</h2><br/><br/>

        <button onClick={()=>setInputs(inputs+'1')}>1</button>
        <button onClick={()=>setInputs(inputs+'2')}>2</button>
        <button onClick={()=>setInputs(inputs+'3')}>3</button>
        <button onClick={()=>setInputs(inputs+'4')}>4</button>
        <button onClick={()=>setInputs(inputs+'5')}>5</button><br/>
        <button onClick={()=>setInputs(inputs+'6')}>6</button>
        <button onClick={()=>setInputs(inputs+'7')}>7</button>
        <button onClick={()=>setInputs(inputs+'8')}>8</button>
        <button onClick={()=>setInputs(inputs+'9')}>9</button>
        <button onClick={()=>setInputs(inputs+'0')}>0</button><br/>

        <button onClick={()=>setInputs(inputs+'+')}>+</button>
        <button onClick={()=>setInputs(inputs+'-')}>-</button>
        <button onClick={()=>setInputs(inputs+'*')}>*</button>
        <button onClick={()=>setInputs(inputs+'/')}>/</button>
        <button onClick={()=>setInputs(inputs+'%')}>%</button>
        <button onClick={()=>setInputs(inputs+'**')}>^</button>
        <button onClick={()=>setInputs(' ')}>clear</button>
        </center>
    </div>
  )
}

export default Caliculate
