import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  let increment = () => {
    setCount((count + 1))
  }
  
  let decrement = () => {
    if(count > 0) setCount((count - 1))
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
