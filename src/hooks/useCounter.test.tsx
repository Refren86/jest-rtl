import { act, renderHook } from '@testing-library/react';

import { useCounter } from './useCounter';

describe('Counter hook', () => {
  test('initial count is 0', () => {
    const { result } = renderHook(() => useCounter({}));
    // result.current contains the returned value of the hook
    expect(result.current.counter).toBe(0);
  });

  test('renders initial count the same as passed props value', () => {
    const { result } = renderHook(() => useCounter({ initialCounter: 5 }));
    expect(result.current.counter).toBe(5);
  });

  test('should increment the count', () => {
    const { result } = renderHook(() => useCounter({}));
    
    // for handling state updates
    act(() => {
      result.current.increment()
    })

    expect(result.current.counter).toBe(1);
  });

  test('should decrement the count', () => {
    const { result } = renderHook(() => useCounter({}));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(-1);
  });
});
