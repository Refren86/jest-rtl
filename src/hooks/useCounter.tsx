import { useState } from 'react';

type UseCounterProps = {
  initialCounter?: number;
};

export const useCounter = ({ initialCounter = 0 }: UseCounterProps) => {
  const [counter, setCounter] = useState<number>(initialCounter);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter((prev) => prev - 1);
  }

  return { counter, increment, decrement };
};
