import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postsSlice';
import { AddPostForm } from './parts/AddPostForm';
import { Box, Container } from '@material-ui/core';
import { PostCard } from './parts/PostCard';

export const PostList: React.FC = () => {
  const posts = useSelector(selectAllPost);
  return (
    <Container>
      <div>
        <AddPostForm />
        <h1>Post Lists</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <Box m={2}></Box>
            <PostCard postId={post.id} />
          </div>
        ))}
      </div>
    </Container>
  );
};
