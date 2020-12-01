import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { postsSlice } from '../features/posts/postsSlice';
import { usersSlice } from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
