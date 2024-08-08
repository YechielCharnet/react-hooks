import { useState } from "react";

const NumKey = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      {Array.from({ length: 10 }).map((_, i) => (
        <button key={i} onClick={() => setCount(count + i)}>
          {i}
        </button>
      ))}
      <div>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  );
};
export default NumKey;
