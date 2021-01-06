import React from 'react';

const AddOption = ({ option, setOption, onSubmitHandler }) => {
  return (
    <div>
      <form>
        <input
          placeholder='Add an Option'
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
        <button onClick={onSubmitHandler}>Add option</button>
      </form>
    </div>
  );
};

export default AddOption;
