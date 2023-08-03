// import React from 'react'

import React, {useState} from 'react';


export default function TextForm(props) {
    const HandleUpClick = () =>{
        // console.log("Upper-Case Was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const HandleLwClick = () =>{
        // console.log("Upper-Case Was Clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On Changed");
        setText(event.target.value);
    }
  const[text, setText] = useState('');
//   setText("Your's Text");
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example Text Area</label>
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="4"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick = {HandleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-success mx-2" onClick = {HandleLwClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
