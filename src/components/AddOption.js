import React from 'react';
import '../styles/add-option.css';

const AddOption = ({ option, setOption, onSubmitHandler }) => {
  return (
    <div>
      <form className='add-option'>
        <input
          className='add-option__input'
          placeholder='Add an Option'
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
        <button className='button' onClick={onSubmitHandler}>
          Add option
        </button>
      </form>
    </div>
  );
};

export default AddOption;
