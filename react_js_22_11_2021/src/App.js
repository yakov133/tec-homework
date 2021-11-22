import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TwoCounter from './components/TwoCounter';
import LongText from './components/LongText';
import ShowHide from './components/ShowHide';


function App() {
  return (
    <div>
      <Counter  />
      <Counter number={4}/>
      <TwoCounter />
      <LongText text={"hello world"}/>
      <LongText text={"hi"}/>
      <ShowHide text={"yakov kassa"} />

    </div>
  )
}

export default App;
