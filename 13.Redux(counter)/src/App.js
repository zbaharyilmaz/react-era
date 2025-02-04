import React from 'react'



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