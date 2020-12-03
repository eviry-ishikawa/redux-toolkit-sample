import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type User = {
  id: string;
  name: string;
};

export type Users = User[];

const initialState: Users = [
  { id: '1', name: 'test user 1' },
  { id: '2', name: 'test user 2' },
  { id: '3', name: 'test user 3' },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
});

export const selectUserById = (
  state: RootState,
  userId: string,
): User | undefined => state.users.find((user) => user.id === userId);
