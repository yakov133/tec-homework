import './App.css';
import Form from './components/Form';
import Name from './components/Name';
import ThreeCounters from './components/ThreeCounters';
import VacationList from './components/vacationList';
import YourName from './components/YourName';

function App() {
  return (
    <div className="App">
      <YourName />
      <Name name={"lalal"}/>
      <ThreeCounters />
      <Form />
      <VacationList />
    </div>
  );
}

export default App;
