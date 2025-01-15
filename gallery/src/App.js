import data from "./helper/data";
import './App.css';
import {useState} from "react";

function App() {
  const [index, setIndex] = useState(0);
  const photoData = data[index];

  const handleNextClick=()=>{
    if(index< data.length-1){setIndex(index+1)}
    
  }
  const handlePreviousClick=()=>{
    if(index>0){setIndex(index-1)}
    
  }
  return (
    <div className="App">
     <h2> <i>Black and White Photo Contest</i> Top 30 Ranking List</h2>
     <h3><i>Photo by <span className="photographer">{photoData.photographer}</span></i></h3>
     <h4>({index+1} of {data.length})</h4>
     <button onClick={handlePreviousClick} disabled={index === 0}>Previous</button>
     <button onClick={handleNextClick} disabled={index === data.length - 1}>Next</button>
     <div className="img-container">
      <img className="images" src={photoData.src.large} alt={photoData.photographer}/>
      </div>

    </div>
  );
}

export default App;
