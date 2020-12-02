import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../app/store';
import { selectPostById } from './postsSlice';

export const PostPage = () => {
  const { postId } = useParams<any>();
  useEffect(() => {
    console.log(postId);
  });

  const post = useSelector((state: RootState) => selectPostById(state, postId));

  if (post === undefined) {
    return <div>No Data</div>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};