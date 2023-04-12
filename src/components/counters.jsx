import Counter from "./counter";
import React from "react";

function Counters({ counters, onIncrement, onDelete, onDecrement, onReset }) {
  return (
    <>
      <button onClick={onReset} className="btn btn-success btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
          // value={counter.value}
          // id={counter.id}
        />
      ))}
    </>
  );
}

export default Counters;
