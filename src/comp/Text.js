import React from 'react';

function Text(props) {
  return (
    <div className='text'>
        <h2 className='title'>{props.win ? 'You won' : 'Tenzies'}</h2>
        {!props.win && <p className='instruction'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}
    </div>
  )
}

export default Text;