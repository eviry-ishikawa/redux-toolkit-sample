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
          <Box m={2}>
            <PostCard post={post} />
          </Box>
        ))}
      </div>
    </Container>
  );
};
