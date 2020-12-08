import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app/store';
import { PostAuthor } from './PostAuthor';
import { selectPostById } from '../postsSlice';

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
      <h3>{post.title}</h3>
      <p>{post.user}</p>
      <p>{post.content}</p>
      <Link to={`/users/${post.user}`}>
        <PostAuthor userId={post.user} />
      </Link>
    </div>
  );
});
