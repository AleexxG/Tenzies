import React from 'react';
import './App.css';
import Text from './comp/Text';
import Dice from './comp/Dice';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [win, setWin] = React.useState(false);
  const [dice, setDice] = React.useState(allNewDice());

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const sameValue = dice.every(die => die.value === dice[0].value);
    if (allHeld && sameValue) {
      setWin(true)
    };
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) +1,
      isHeld: false,
      id: uuidv4()
    };
  }

  function allNewDice() {
    const newArr = [];
    for (let i=0; i<10; i++) {
      newArr.push(generateNewDie());
    };
    return newArr;
  }

  function rollDice() {
    setDice(prev => prev.map(prevDie => {
      return (
        prevDie.isHeld ? 
        prevDie :
        generateNewDie()
      );
    }));
  }

  function holdDice(id) {
    setDice(prev => prev.map(die => {
      return id === die.id ?
      {...die, isHeld: !prev.isHeld} :
      die
    }));
  }

  const diceElement = dice.map(die => (
    <Dice
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={holdDice}
    />
  ));

  return (
    <div className="app">
      <Text 
        win={win}
      />

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
