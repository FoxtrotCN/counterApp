import React, { useState } from "react";

function Counter({ value, id, onDelete }) {
  const [count, setCount] = useState(value);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBadgeColor = () => {
    let classes = "badge m-2 text-bg-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };
  // const renderTags = () => {
  //   if (tags.length === 0) return <p>There are no tags!</p>;
  //
  //   return (
  //     <ul>
  //       {tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // };

  const handleIncrement = (e) => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <span className={getBadgeColor()}>{formatCount()}</span>
        <button
          onClick={(e) => handleIncrement(e)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default Counter;
