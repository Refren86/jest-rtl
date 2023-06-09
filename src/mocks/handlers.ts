import { rest } from 'msw';
import { usersData } from '../data/users';

// mocked backend handlers
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(usersData)
    );
  }),
];
