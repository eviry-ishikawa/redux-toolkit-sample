import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllUser } from './usersSlice';

export const UsersList: React.FC = () => {
  const users = useSelector(selectAllUser);

  return (
    <Container>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </Container>
  );
};
