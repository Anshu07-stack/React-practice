import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeByValue, decrement, increment } from "../store/features/counter/counterSlice";

const Counter = () => {
    const [value,setValue] = useState(0)
  const dispatch = useDispatch();

  const storeValue = useSelector((state) => state.counter.value);

  const HandleIncrement = () => {
    dispatch(increment());
  };

  const HandleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeByValue=()=>{
    dispatch(changeByValue(value))
  }
  useEffect(()=>{
    console.log('re-render hua')
  })
  return (
    <div>
      <h2>{storeValue}</h2>

      <button 
      onClick={HandleIncrement}>Increment</button>
      <button onClick={HandleDecrement}>Decrement</button>
      <input
      className="border"
       type="number"
       onChange={(e)=>setValue(e.target.value)}
       />
       <button onClick={handleChangeByValue}>Change By Value</button>
    </div>
  );
};

export default Counter;
