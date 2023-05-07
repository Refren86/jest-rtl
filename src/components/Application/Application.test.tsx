import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

describe('Application component', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      // name: 'Job application form', // h1-6 tag content
      level: 1, // h1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      // name: 'Section 1', // h1-6 tag content
      level: 2, // h2
    });
    expect(sectionHeading).toBeInTheDocument();

    // textbox = input/textarea element
    const nameEl = screen.getByRole('textbox', {
      name: 'Name', // label text
    });
    expect(nameEl).toBeInTheDocument();

    const bioEl = screen.getByRole('textbox', {
      name: 'Bio', // label text
    });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole('combobox'); // select element (dropdown)
    expect(jobLocationEl).toBeInTheDocument();

    const checkboxEl = screen.getByRole('checkbox');
    expect(checkboxEl).toBeInTheDocument();

    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();
  })
})