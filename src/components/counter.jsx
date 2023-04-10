import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function formatCount() {
    return count === 0 ? "Zero" : count;
  }
  return (
    <>
      <span className="badge bg-primary m-2">{formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </>
  );
}

export default Counter;
