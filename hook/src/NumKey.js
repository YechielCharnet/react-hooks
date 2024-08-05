

import React from 'react';

const NumKey = ({ number, handleClick }) => {
  return (
    <button onClick={() => handleClick(number)}>{number}</button>
  );
};

export default NumKey;




