import Counter from "./counter";
import { useState } from "react";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 4 },
  ]);
  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
      ))}
    </>
  );
}

export default Counters;
