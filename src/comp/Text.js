import React from 'react';

function Text(props) {

  let heading
    if (!props.win && props.rollCount === 0) {
      heading = 'Tenzies';
    } else if (props.win) {
      heading = 'You Won';
    };

  let instruction = !props.win && props.rollCount === 0 ? 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.' : '';

  return (
    <div className='text'>
        <h2 className='title'>{heading}</h2>

        <p className='instruction'>{instruction}</p>

        {props.rollCount > 0 && <h3 className='roll-count'>Roll count: {props.rollCount}</h3>}
    </div>
  )
}

export default Text;