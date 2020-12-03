import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import { selectPostById } from './postsSlice';

type PostInfoProps = {
  postId: string;
};

export const PostInfo = React.memo(({ postId }: PostInfoProps) => {
  const post = useSelector((state: RootState) => selectPostById(state, postId));

  if (post === undefined) {
    return <div>No Data</div>;
  }
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.user}</p>
    </div>
  );
});
