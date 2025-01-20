// import LifeCycleMethods from './components/LifeCycleMethods';
import React, {useState} from 'react';
import User from './components/User';
// import UseEffectHook from "./components/UseEffectHook";

function App() {
  const [visible, setVisible] = useState(true);

  return (
      <div className="container text-center mt-4">
      <button onClick={()=>setVisible(!visible)} className="btn btn-danger">{visible? "Hide" :"Show"}</button>
      {/* {visible && <LifeCycleMethods/>}  */} 
      {/* {visible && <UseEffectHook />} */}
      {visible && <User />}
     </div>
  );
}

export default App;
