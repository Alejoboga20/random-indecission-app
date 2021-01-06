import React from 'react';

export default ({ title, subtitle }) => (
  <div>
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  </div>
);
