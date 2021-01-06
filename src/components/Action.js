import React from 'react';

const Action = ({ handleRandomSelection, options }) => (
  <div>
    <button onClick={handleRandomSelection} disabled={!options.length}>
      What should I do?
    </button>
  </div>
);

export default Action;
