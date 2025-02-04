import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter, resetCounter } from "./redux/actions/counterActions";
import "./Counter.css";


const Counter = () => {

  //& değişkenler(useState diyelim) useSelector hook u ile getirilir. (REDUCER DAN)
  //? Usedispatch ile ACTION DAN getirme, action ile tanışma yapılır.(increase, decresase, reset fonk ile tanışılır.)

  const{sayac, text}=useSelector((state)=>state.counterReducer)
  const dispatch= useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header">COUNTER</h2>

      <h1>{sayac} </h1>
      {/* sayac */}
      <h2>{text} </h2>
      {/* text */}
      <div>
        <button className="counter-button positive" 
        onClick={() => dispatch (increaseCounter())}>
         Increase
        </button>

        <button className="counter-button zero" 
        onClick={() => dispatch(resetCounter())}>
          Reset
        </button>
        <button className="counter-button negative" 
        onClick={() => dispatch(decreaseCounter())}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
