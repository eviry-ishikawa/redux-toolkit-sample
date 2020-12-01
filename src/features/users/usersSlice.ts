import { createSlice } from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
};

export type Users = User[];

const initialState: Users = [
  { id: 1, name: 'test user 1' },
  { id: 2, name: 'test user 2' },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
});
