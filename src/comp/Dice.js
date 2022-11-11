import React from 'react';

function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? 'var(--details-color)' : 'white'
  }

let value
  if (props.value === 1) {
    return (
      <div className='dice' 
          onClick={() => props.holdDice(props.id)} 
          style={styles}>
        <h2 className='dice-num'>
          <span className='dot'></span>
        </h2>
      </div>
    )
  } else if (props.value === 2) {
    return (
      <div className='dice' 
          onClick={() => props.holdDice(props.id)} 
          style={styles}>
        <h2 className='dice-num'>
          <span className='dot'></span>
          <span className='dot'></span>
        </h2>
      </div>
    )
  } else if (props.value === 3) {
    return (
      <div className='dice' 
          onClick={() => props.holdDice(props.id)} 
          style={styles}>
        <h2 className='dice-num'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </h2>
      </div>
    )
  } else if (props.value === 4) {
    return (
      <div className='dice' 
          onClick={() => props.holdDice(props.id)} 
          style={styles}>
        <h2 className='dice-num'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </h2>
      </div>
    )
  } else if (props.value === 5) {
    return (
      <div className='dice' 
          onClick={() => props.holdDice(props.id)} 
          style={styles}>
        <h2 className='dice-num'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </h2>
      </div>
    )
  } else if (props.value === 6) {
    return (
      <div className='dice' 
          onClick={() => props.holdDice(props.id)} 
          style={styles}>
        <h2 className='dice-num'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </h2>
      </div>
    )
  }

  return (
    {value}
  );
}

export default Dice;