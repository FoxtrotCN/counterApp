import React from "react";

function Counter({ counter, onDelete, onIncrement, onDecrement }) {
  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  const getBadgeColor = () => {
    let classes = "badge m-2 text-bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  // const disabledButton = () => {
  //   return counter.value === 0;
  // };

  return (
    <>
      <div className="row">
        <div className="col-1">
          <span className={getBadgeColor()}>{formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter.id)}
            className="btn btn-secondary btn-sm"
          >
            <b>+</b>
          </button>
          <button
            onClick={() => onDecrement(counter.id)}
            disabled={counter.value === 0}
            className="btn btn-secondary btn-sm m-2"
          >
            <b>-</b>
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            <b>X</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
