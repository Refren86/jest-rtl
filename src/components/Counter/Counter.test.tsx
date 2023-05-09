import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Counter } from './Counter';

describe('Counter component', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const countEl = screen.getByRole('heading');
    expect(countEl).toBeInTheDocument();

    const incBtn = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incBtn).toBeInTheDocument();

    const amountInput = screen.getByRole('spinbutton');
    expect(amountInput).toBeInTheDocument();
  });

  // test('initially renders a count of 0', () => {
  //   render(<Counter />);
  //   const countEl = screen.getByRole('heading');
  //   expect(countEl).toHaveTextContent('0');
  // });

  // test('count works correctly', async () => {
  //   user.setup();
  //   render(<Counter />);
  //   const countEl = screen.getByRole('heading');
  //   const incBtn = screen.getByRole('button', {
  //     name: 'Increment',
  //   });

  //   await user.click(incBtn);
  //   expect(countEl).toHaveTextContent('1');
  //   await user.click(incBtn);
  //   expect(countEl).toHaveTextContent('2');
  // })

  // test('amount input works correctly', async () => {
  //   user.setup();
  //   render(<Counter />);
  //   const amountInput = screen.getByRole('spinbutton');
  //   const setCountBtn = screen.getByRole('button', {
  //     name: 'Set count',
  //   });
  //   const countEl = screen.getByRole('heading');

  //   await user.type(amountInput, '123');
  //   expect(amountInput).toHaveValue(123);

  //   await user.click(setCountBtn);
  //   expect(countEl).toHaveTextContent('123');
  // })

  // // test for focus on tab btn press
  // test('elements are focused in the right order', async () => {
  //   user.setup();
  //   render(<Counter />);
  //   const incBtn = screen.getByRole('button', {
  //     name: 'Increment',
  //   });
  //   const amountInput = screen.getByRole('spinbutton');
  //   const setCountBtn = screen.getByRole('button', {
  //     name: 'Set count',
  //   });

  //   await user.tab();
  //   expect(incBtn).toHaveFocus();
  //   await user.tab();
  //   expect(amountInput).toHaveFocus();
  //   await user.tab();
  //   expect(setCountBtn).toHaveFocus();
  // })
});
