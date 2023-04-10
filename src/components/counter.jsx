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

  const handleIncrement = () => {
    console.log("Increment Clicked");
  };
  return (
    <>
      <span className={getBadgeColor()}>{formatCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
      {/*{tags.length === 0 && <p>Please, create a new tag!</p>}*/}
      {/*{renderTags()}*/}
    </>
  );
}

export default Counter;
