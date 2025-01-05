import helloreact from "./assets/react.png"
import './App.css';

function App() {
  return (
    <div className="App">
    <p>Hello React</p>
    <img src={helloreact} alt="" className="hellopicture"/>
    </div>
  );
}

export default App;
