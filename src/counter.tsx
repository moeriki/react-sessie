import React, { MouseEvent, ReactElement, useState } from 'react';

function useCounter() {
  const [count, setCount] = useState<number>(0);

  const increaseByOne = (): void => setCount((oldCOunt) => oldCOunt + 1);
  const increaseByTwo = (): void => setCount((oldCOunt) => oldCOunt + 2);

  return [count, increaseByOne, increaseByTwo];
}

export function Counter(): ReactElement {
  const [count, increaseByOne, increaseByTwo] = useCounter();

  return (
    <>
      <div>You have clicked {count} times.</div>
      <button
        onClick={(event: MouseEvent): void => {
          console.log(event);
        }}
        type="button"
      >
        Increase count by 1
      </button>
      <button onClick={increaseByTwo} type="button">
        Increase count by 2
      </button>
    </>
  );
}
