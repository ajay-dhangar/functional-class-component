import './App.css'
import ClassComponent  from "./components/ClassComponent";
import FunctionComponent  from "./components/FunctionComponent";
function App() {
  return (
    <div className="App">
      <h1>Styling using Functional and Class components</h1>
      <div className='btns'>
        <FunctionComponent name="John"/>
        <ClassComponent />        
        </div>
    </div>
  );
}

export default App;
