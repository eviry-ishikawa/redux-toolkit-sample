import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Post = {
  id: number;
  title: string;
  content: string;
  user: number;
};

export type Posts = Post[];

const initialState: Posts = [
  {
    id: 1,
    title: 'test title1',
    content: 'test content',
    user: 1,
  },
  {
    id: 2,
    title: 'test title2',
    content: 'test content',
    user: 1,
  },
  {
    id: 3,
    title: 'test title3',
    content: 'test content',
    user: 1,
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
});

export const selectAllPost = (state: RootState): Posts => state.posts;
export const selectPostById = (
  state: RootState,
  postId: number,
): Post | undefined => state.posts.find((post) => post.id === postId);
