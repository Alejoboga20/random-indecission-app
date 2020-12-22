import React from 'react';

export default ({ title, subtitle }) => (
  <div className='App-header'>
    <div className='container'>
      <h1 className='header__title'>{title}</h1>
      {subtitle && <h2 className='header__subtitle'>{subtitle}</h2>}
    </div>
  </div>
);
