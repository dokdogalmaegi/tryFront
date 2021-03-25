import React from 'react';
import './Form.css';

// this components annotation

/*
value: content of input
onCreate: When clicked of button a function is execute
onChange: When changed of input content a function is execute
onkeyPress: When input of key a function is execute
*/

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className='form'>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className='create-button' onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;