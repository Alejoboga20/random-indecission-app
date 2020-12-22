import React from 'react';

const Option = ({ optionText, count, handleDeleteOption }) => {
  return (
    <div>
      <p>
        {count} {optionText}
      </p>
      <button onClick={() => handleDeleteOption(optionText)}>Delete</button>
    </div>
  );
};

export default Option;
