import React from 'react';

function Input(props) {
  
  const add = () => {
    props.setResult(props.result + Number(props.getNum))
  }

  const sub = () => {
    props.setResult(props.result - Number(props.getNum))
  }
  return (
    <div>
      <p>Enter a value to add/subtract</p>
      <input type="number" id="inputfield" placeholder="Enter Number" onChange={(e)=>{
        props.setGetNum(e.target.value)
      }} />
      <br />
      <button id="add" onClick={add}>Add</button>
      <br />
      <button id="sub" onClick={sub}>Subtract</button>
    </div>
  )
}

export default Input;