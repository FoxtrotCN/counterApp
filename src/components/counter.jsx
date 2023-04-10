import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function formatCount() {
    return count === 0 ? "Zero" : count;
  }
  return (
    <>
      <span>{formatCount()}</span>
      <button>Increment</button>
    </>
  );
}

export default Counter;
