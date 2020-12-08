import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllPost } from './postsSlice';
import { ReactionButton } from './parts/ReactionButton';
import { PostInfo } from './parts/PostInfo';
import { AddPostForm } from './parts/AddPostForm';
import { Box, Card, CardContent, Container } from '@material-ui/core';

export const PostList: React.FC = () => {
  const posts = useSelector(selectAllPost);
  return (
    <Container>
      <div>
        <div>
          <AddPostForm />
        </div>
        <h1>Post Lists</h1>
        {posts.map((post) => (
          <Box m={2}>
            <Card key={post.id} raised={true}>
              <CardContent>
                <PostInfo postId={post.id} />
                <ReactionButton postId={post.id} />
                <Link to={`/posts/${post.id}`}>View Post</Link>
              </CardContent>
            </Card>
          </Box>
        ))}
      </div>
    </Container>
  );
};
