import { useEffect, useState } from 'react';

type Props = {};

export const Users = ({}: Props) => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.map((u: { name: string }) => u.name)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <h1>Users</h1>
      {error && <p data-testid='error-msg'>{error}</p>}

      {users.length > 0 && users.map((u) => <div data-testid="user-item" key={u}>{u}</div>)}
    </>
  );
};
