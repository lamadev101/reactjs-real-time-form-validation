import React from 'react'
import { useState } from 'react';
import './InputForm.css';

const InputForm = (props) => {
  const[focused, setFocused] = useState(false);
  const {label, onChange, errorMsg, ...inputProps} = props;
  const handleFocus = (e) => {
    setFocused(true);
  }
  return (
    <div className='formAttr'>
        <label>{label}:</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)} focused={focused.toString()} />
        <span>{errorMsg}</span>
    </div>
  )
}

export default InputForm