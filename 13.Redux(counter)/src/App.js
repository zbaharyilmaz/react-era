import React from 'react'
import Counter from './Counter';



const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter/> 
      </Provider>
     

    </div>
  );
}

export default App