import './App.css';
import Text from './comp/Text';
import Dice from './comp/Dice';

function App() {
  return (
    <div className="app">
      <Text />
      <Dice />
      <button className='btn'>Roll</button>
    </div>
  );
}

export default App;
