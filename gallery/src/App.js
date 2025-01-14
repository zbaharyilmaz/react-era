
import './App.css';
const handleNextClick=()=>{
  alert("next")
  
}
const handlePreviousClick=()=>{
  alert("previous")
}


function App() {
  return (
    <div className="App">
     <button onClick={handleNextClick}>Next</button>
     <button onClick={handlePreviousClick}>Previous</button>
    </div>
  );
}

export default App;
