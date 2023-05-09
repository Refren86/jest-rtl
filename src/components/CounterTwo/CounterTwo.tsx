type Props = {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};

export const CounterTwo = ({ count, handleDecrement, handleIncrement }: Props) => {
  return (
    <>
      <h1>Counter two</h1>
      <p>{count}</p>

      {handleIncrement && <button onClick={handleIncrement}>Inc</button>}
      {handleDecrement && <button onClick={handleDecrement}>Dec</button>}
    </>
  );
};
