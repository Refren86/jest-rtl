import { useState } from 'react';

type Props = {};

export const Counter = ({}: Props) => {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const handleIncrease = () => {
setCount((prev) => prev + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increment</button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value, 10))}
      />
      <button onClick={() => setCount(amount)}>Set count</button>
    </>
  );
};
