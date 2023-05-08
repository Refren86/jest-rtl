import { render, screen, logRoles } from '@testing-library/react';
import { Skills } from './Skills';

const skills = ['js', 'html', 'css'];

describe('Skills component', () => {
  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listEl = screen.getByRole('list');
    expect(listEl).toBeInTheDocument();
  });

  test('renders all skills', () => {
    render(<Skills skills={skills} />);
    const listItemEl = screen.getAllByRole('listitem');
    expect(listItemEl).toHaveLength(skills.length);
  });

  test('renders login btn', () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginBtn).toBeInTheDocument();
  });

  test('start learning btn is not shown', () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test('start learning btn is shown after 1 sec', async () => {
    const view = render(<Skills skills={skills} />);
    // logRoles(view.container) // useful for getting all the roles inside the rendered component

    // screen.debug()
    const startLearningBtn = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 } // extending default timeout for waiting from 1s to 2s
    );
    // screen.debug();
    expect(startLearningBtn).toBeInTheDocument();
  });
});
