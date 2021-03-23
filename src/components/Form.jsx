import React from 'react';
import './From.css';

const Form = ({ value, onchange, onCreate, onKeyPress }) => {
  return (
    <div className='form'>
      <input value={value} onChange={onchange} onKeyPress={onKeyPress} />
      
    </div>
  )
};