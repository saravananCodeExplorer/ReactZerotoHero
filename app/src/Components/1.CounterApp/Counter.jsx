// Counter.js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>ADD+</button>
      <button onClick={() => setCount(count - 1)}>SUB-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
