import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUser } from '../usersSlice';

type UsersSelectProps = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const UsersSelect: React.FC<UsersSelectProps> = ({ handleChange }) => {
  const users = useSelector(selectAllUser);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <select onChange={handleChange}>
        <option value=""></option>
        {usersOptions}
      </select>
    </div>
  );
};
