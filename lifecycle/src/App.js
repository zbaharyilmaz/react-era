// import LifeCycleMethods from './components/LifeCycleMethods';
import React, {useState} from 'react';
import UseEffectHook from "./components/UseEffectHook";


function App() {
  const [visible, setVisible] = useState(true);

  return (
      <div className="container text-center mt-4">
      <button onClick={()=>setVisible(!visible)} className="btn btn-danger">{visible? "Hide" :"Show"}</button>
      {/* {visible && <LifeCycleMethods/>}  */} 
      {visible && <UseEffectHook />}
     </div>
  );
}

export default App;
