import React from 'react';

function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? 'var(--details-color)' : 'white'
  }

  return (
    <div className='dice' 
          onClick={() => props.holdDice(props.id)} 
          style={styles}>

        <h2 className='dice-num'>{props.value}</h2>
    </div>
  );
}

export default Dice;