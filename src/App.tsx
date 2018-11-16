import * as React from 'react';
import Example from './components/Example';

import './App.css';

export default () => {

  const handleClick = () => console.log('click');

  return (
    <div className="container">
      <div className="firstCellContainer">
        <Example
          value="X"
          position={{ x: 0, y: 0 }}
          onClick={handleClick}
        />
      </div>
      <div className="cellContainer">
        <Example
          value=" "
          position={{ x: 0, y: 1 }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
