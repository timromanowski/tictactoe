import React from 'react';
import './Square.style.css';

const Square = props => {
  const { value, onClick } = props;

  return ( 
      <button type="button" className="square" onClick={onClick}>
         {value}
      </button>
  );
};
export default Square;
