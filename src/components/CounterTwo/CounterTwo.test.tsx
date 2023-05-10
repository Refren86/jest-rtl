import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { CounterTwo } from './CounterTwo';

describe('CounterTwo component', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);
    const textEl = screen.getByText(/counter two/i);
    expect(textEl).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    user.setup();

    // mock functions
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incBtnEl = screen.getByRole('button', { name: 'Incc' });
    const decBtnEl = screen.getByRole('button', { name: 'Dec' });

    await user.click(incBtnEl);
    await user.click(decBtnEl);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
