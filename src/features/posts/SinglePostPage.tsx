import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { selectPostById } from './postsSlice';

type SinglePostPageProps = {
  postId: number;
};

export const SinglePostPage: React.FC<SinglePostPageProps> = ({ postId }) => {
  const post = useSelector((state: RootState) => selectPostById(state, postId));

  if (post === undefined) {
    return <div>No Data</div>;
  }
  return (
    <div>
      {post.title}
      {post.content}
      {post.user}
    </div>
  );
};
