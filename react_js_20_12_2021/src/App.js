import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ChangeTitle from './components/Title';


function App() {
  const [key, setkey] = useState(987)
  
  return (
    <div className="App">
      
      <input type="number" onChange={(e)=> setkey(+e.target.value)}/>
      <Counter count={key}/>
      <br />
      <br />
      <ChangeTitle />
    </div>
  );
}

export default App;
