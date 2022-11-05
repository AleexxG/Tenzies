import React from 'react';

function Dice(props) {
  return (
    <div className='dice'>
        <h2 className='dice-num'>{props.randomNum}</h2>
    </div>
  );
}

export default Dice;