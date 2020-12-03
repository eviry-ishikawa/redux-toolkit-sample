import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { selectUserById } from '../users/usersSlice';

export const PostAuthor: React.FC<{ userId: string }> = ({ userId }) => {
  const author = useSelector((state: RootState) =>
    selectUserById(state, userId),
  );

  return <span>{author ? author.name : 'Unknown Error'}</span>;
};
