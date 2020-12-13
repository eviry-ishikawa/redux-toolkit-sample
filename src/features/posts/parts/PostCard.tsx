import React from 'react';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { selectPostById } from '../postsSlice';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import { ReactionButton } from './ReactionButton';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

type PostCardProps = {
  postId: string;
};

export const PostCard = React.memo(({ postId }: PostCardProps) => {
  const post = useSelector((state: RootState) => selectPostById(state, postId));

  if (post === undefined) return <div>No data</div>;

  return (
    <Card raised>
      <Box m={1}>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </Grid>
            <Grid item xs={12}>
              Author：
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
