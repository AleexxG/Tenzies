import React from 'react';
import './App.css';
import Text from './comp/Text';
import Dice from './comp/Dice';

function App() {
  
  const [random, setRandom] = React.useState(allNewDice());

  function allNewDice() {
    const newArr = [];
    for (let i=0; i<9; i++) {
      newArr[i] = Math.floor(Math.random() * 6) +1
      newArr.push(newArr[i]);
    }
    return newArr;
  }

  function rollDice() {
    setRandom(prev => prev.map(prevDie => {
      return (
        Math.floor(Math.random() * 6) +1
      )
    }));
  }

  const diceElement = random.map(die => (
    <Dice 
      randomNum={die}
    />
  ))

  return (
    <div className="app">
      <Text />

      <div className='allDice'>
        {diceElement}
      </div>

      <button 
        className='btn'
        onClick={rollDice}
      >Roll</button>
    </div>
  );
}

export default App;
