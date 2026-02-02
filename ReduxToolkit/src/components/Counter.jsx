import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeByValue, decrement, increment } from "../store/features/counter/counterSlice";

const Counter = () => {
    const [value,setValue] = useState(0)
  const dispatch = useDispatch();

  const state = useSelector((state) => state.counter);

  const HandleIncrement = () => {
    dispatch(increment());
  };

  const HandleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeByValue=()=>{
    dispatch(changeByValue(value))
  }
  return (
    <div>
      <h2>{state.value}</h2>

      <button 
      onClick={HandleIncrement}>Increment</button>
      <button onClick={HandleDecrement}>Decrement</button>
      <input
       type="number"
       onChange={(e)=>setValue(e.target.value)}
       />
       <button onClick={handleChangeByValue}>Change By Value</button>
    </div>
  );
};

export default Counter;
