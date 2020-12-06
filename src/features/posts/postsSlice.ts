import {
  createSelector,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Reactions = {
  thumbsUp: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  user: string;
  reactions: Reactions;
};

export type Posts = Post[];

const initialState: Posts = [
  {
    id: '1',
    title: 'test title1',
    content: 'test content',
    user: '1',
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: '2',
    title: 'test title2',
    content: 'test content',
    user: '2',
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: '3',
    title: 'test title3',
    content: 'test content',
    user: '3',
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            user: userId,
            reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
          },
        };
      },
    },

    reactionAdded: (state, action) => {
      const {
        postId,
        reaction,
      }: { postId: string; reaction: keyof Reactions } = action.payload;
      const post = state.find((post) => post.id === postId);
      if (post) {
        post.reactions[reaction] += 1;
        console.log(post.reactions);
      }
    },
  },
});

export const { reactionAdded, postAdded } = postsSlice.actions;

export const selectAllPost = (state: RootState): Posts => state.posts;
export const selectPostById = (
  state: RootState,
  postId: string,
): Post | undefined => state.posts.find((post) => post.id === postId);

export const selectPostByUser = createSelector(
  [selectAllPost, (state: RootState, userId: string) => userId],
  (state, userId) => state.filter((post) => post.user === userId),
);
// export const selectPostByUser = (
//   state: RootState,
//   userId: string,
// ): Posts | undefined => state.posts.filter((post) => post.user === userId);
