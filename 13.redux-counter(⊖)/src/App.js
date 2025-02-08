import React from 'react'
import Counter from './components/Counter'
import "./App.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter /> 
      </Provider>
    </div>
  );
}

export default App