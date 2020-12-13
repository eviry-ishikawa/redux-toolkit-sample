import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../app/store';
import { PostCard } from '../posts/parts/PostCard';
import { selectPostByUser } from '../posts/postsSlice';
import { selectUserById } from './usersSlice';

export const UserPage: React.FC = () => {
  const { userId } = useParams();
  const user = useSelector((state: RootState) => selectUserById(state, userId));

  const posts = useSelector((state: RootState) =>
    selectPostByUser(state, userId),
  );

  return (
    <Container>
      <h1>{user?.name} ' s posts</h1>
      {posts?.map((post) => (
        <div key={post.id}>
          <PostCard postId={post.id} />
        </div>
      ))}
    </Container>
  );
};
