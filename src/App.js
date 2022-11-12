import React from 'react';
import './App.css';
import Text from './comp/Text';
import Dice from './comp/Dice';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [win, setWin] = React.useState(false);
  const [dice, setDice] = React.useState(allNewDice());
  const [rollCount, setRollCount] = React.useState(0);

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
    setRollCount(prev => prev + 1);
    if (!win) {
      setDice(prev => prev.map(prevDie => {
        return (
          prevDie.isHeld ? 
          prevDie :
          generateNewDie()
        );
      }));
    } else {
      setWin(false);
      setRollCount(0);
      setDice(allNewDice());
    };
  }

  function holdDice(id) {
    setDice(prev => prev.map(die => {
      return id === die.id ?
      {...die, isHeld: !die.isHeld} :
      die;
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
        rollCount={rollCount}
      />

      <div className='allDice'>
        {diceElement}
      </div>

      <button 
        className='btn'
        onClick={rollDice}
      >{win ? 'New game' : 'Roll'}</button>
    </div>
  );
}

export default App;
