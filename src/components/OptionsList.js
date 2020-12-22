import React from 'react';
import Option from './Option';

const OptionsList = ({ options, handleDeleteOption }) => {
  return (
    <div>
      {!options.length && 'Add some options to get started'}
      {options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default OptionsList;
