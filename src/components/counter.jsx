import React from "react";

function Counter({ counter, onDelete, onIncrement }) {
  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  const getBadgeColor = () => {
    let classes = "badge m-2 text-bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <>
      <div>
        <span className={getBadgeColor()}>{formatCount()}</span>
        <button
          onClick={() => onIncrement(counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Counter;
