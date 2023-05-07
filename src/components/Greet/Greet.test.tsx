import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet component', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const greetEl = screen.getByText(/hello/i);
    expect(greetEl).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet name="Oleg" />);
    const greetEl = screen.getByText(/hello oleg/i);
    expect(greetEl).toBeInTheDocument();
  });
})
