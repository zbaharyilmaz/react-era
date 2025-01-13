import LifeCycleMethods from './components/LifeCycleMethods';
import React, {useState} from 'react';

function App() {
  const [visible, setVisible] = useState(true);

  return (

    <div className="container text-center mt-4">
     <button className="btn btn-danger">Show</button>
     <LifeCycleMethods/>
    </div>
  );
}

export default App;
