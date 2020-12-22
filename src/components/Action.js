import React from 'react';

const Action = ({ handleRandomSelection, options }) => (
  <div>
    <button className='big-button' onClick={handleRandomSelection} disabled={!options.length}>
      What should I do?
    </button>
  </div>
);

export default Action;
