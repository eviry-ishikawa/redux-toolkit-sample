import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { reactionAdded, Reactions, selectPostById } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

type ReactionButtonProps = {
  postId: string;
};

export const ReactionButton = React.memo(({ postId }: ReactionButtonProps) => {
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => selectPostById(state, postId));

  const onClick = (postId: string, reactionName: string) => {
    dispatch(reactionAdded({ postId: postId, reaction: reactionName }));
  };

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button key={name} onClick={() => onClick(postId, name)}>
      {emoji} {post?.reactions[name as keyof Reactions]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
});
