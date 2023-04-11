import Counter from "./counter";
import { useState } from "react";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 4 },
  ]);

  const handleDelete = () => {
    console.log("Event Handler called.");
  };
  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          value={counter.value}
          id={counter.id}
        />
      ))}
    </>
  );
}

export default Counters;
