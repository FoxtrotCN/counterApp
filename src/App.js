import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { useState } from "react";

function App() {
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

  const handleDecrement = (counterId) => {
    const decrementingIndex = counters.findIndex((c) => c.id === counterId);
    const decrementingCounter = { ...counters[decrementingIndex] };
    decrementingCounter.value -= 1;
    const updatedCounters = [...counters];
    updatedCounters[decrementingIndex] = decrementingCounter;
    setCounters(updatedCounters);
  };

  const handleReset = () => {
    const resettingCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(resettingCounters);
  };

  const handleDelete = (counterId) => {
    const countersFiltered = counters.filter((c) => c.id !== counterId);
    setCounters(countersFiltered);
  };

  return (
    <>
      <main className="container">
        <NavBar counters={counters} />
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
        />
      </main>
    </>
  );
}

export default App;
