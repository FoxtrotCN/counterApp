import Counter from "./counter";
import { useState } from "react";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 4 },
  ]);

  const handleIncrement = (counterId) => {
    const incrementingIndex = counters.findIndex((c) => c.id === counterId);
    const incrementingCounter = { ...counters[incrementingIndex] };
    incrementingCounter.value += 1;
    const updatedCounters = [...counters];
    updatedCounters[incrementingIndex] = incrementingCounter;
    setCounters(updatedCounters);
  };

  const handleDelete = (counterId) => {
    const countersFiltered = counters.filter((c) => c.id !== counterId);
    setCounters(countersFiltered);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          counter={counter}
          // value={counter.value}
          // id={counter.id}
        />
      ))}
    </>
  );
}

export default Counters;
