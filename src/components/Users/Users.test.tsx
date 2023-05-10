import { render, screen } from '@testing-library/react';

import { Users } from './Users';
import { usersData } from '../../data/users';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Users component', () => {
  test('renders correctly', () => {
    render(<Users />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('renders a list of users after successful request', async () => {
    render(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users).toHaveLength(usersData.length);
  });

  test('renders error after failed request', async () => {
    // will apply only to this test
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    
    render(<Users />);
    const errorEl = await screen.findByTestId('error-msg');
    expect(errorEl).toBeInTheDocument();
  });
});
