import { MuiMode } from "./MuiMode"
import { render, screen } from "../../utils/test-utils"

describe('MuiMode component', () => {
  test('renders headline correctly', () => {
    // render(
    //   <AppProviders>
    //     <MuiMode />
    //   </AppProviders>
    // );
    // OR
    // render(<MuiMode />, {
    //   wrapper: AppProviders
    // })
    render(<MuiMode />)
    const headline = screen.getByRole('heading');
    expect(headline).toHaveTextContent('dark mode');
  })
})