import './App.css';
import { TodoWrapper } from './Components/TodoWrapper'
import { AnotherWrapper } from './Components/AnotherWrapper'

function App() {
  return (
    <div className="AnotherWrapperContainer">
      <div className="TodoWrapperContainer">
      <TodoWrapper /> 
      </div>

      <div className="TodoWrapperContainer">
        <AnotherWrapper />
      </div>
      
    </div>
  );
}

export default App;
