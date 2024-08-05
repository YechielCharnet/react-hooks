import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0); // Set initial value from props or default to 5

  const handleIncrement = () => {
    setCount(count + props.id);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - props.id);
    } else {
      console.warn('Cannot decrement below zero');
    }
  };

  const handleReset = () => {
    setCount(0); // Reset to initial value or 0 (default)
  };

  return (
    <div>
      <p>Counter {props.id} Value: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
