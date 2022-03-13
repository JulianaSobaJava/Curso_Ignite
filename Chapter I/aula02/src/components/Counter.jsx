import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 2);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={increment}>
        Contar
      </button>
    </div>
  );
}
