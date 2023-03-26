import { useState } from "react";

export default function SeriesStateUpd() {
  return (
    <>
      <Counter />
      <div>===============================</div>
      <RequestTracker />
    </>
  );
}

export function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}

// =============TODO==============

export function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending((n) => n - 1);
    setCompleted((n) => n + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// export function getFinalState(baseState, queue) {
//     let finalState = baseState;

//     for (let update of queue) {
//       if (typeof update === 'function') {
//         // Apply the updater function.
//         finalState = update(finalState);
//       } else {
//         // Replace the next state.
//         finalState = update;
//       }
//     }

//     return finalState;
//   }
