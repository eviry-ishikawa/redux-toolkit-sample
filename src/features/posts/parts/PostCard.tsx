import React from 'react';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { Post } from '../postsSlice';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import { PostInfo } from './PostInfo';
import { ReactionButton } from './ReactionButton';

type PostCardProps = {
  post: Post;
};

export const PostCard = React.memo(({ post }: PostCardProps) => {
  return (
    <Card raised>
      <Box m={1}>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <PostInfo postId={post.id} />
            </Grid>
            <Grid item xs={12}>
              <Link to={`/users/${post.user}`}>
                <PostAuthor userId={post.user} />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to={`/posts/${post.id}`}>View Post</Link>
            </Grid>
            <Grid item xs={12}>
              <ReactionButton postId={post.id} />
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
});
