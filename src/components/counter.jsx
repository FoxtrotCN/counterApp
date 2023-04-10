import React, { useState } from "react";

function Counter({ tags }) {
  tags = ["tag1", "tag2", "tag3"];
  const [count, setCount] = useState(0);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBadgeColor = () => {
    let classes = "badge m-2 text-bg-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <>
      <span className={getBadgeColor()}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );
}

export default Counter;
