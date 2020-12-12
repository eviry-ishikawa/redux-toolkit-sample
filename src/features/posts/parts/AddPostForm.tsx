import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UsersSelect } from '../../users/parts/UsersSelect';
import { postAdded } from '../postsSlice';
import Button from '@material-ui/core/Button';
import { Box, Card, Grid, TextField } from '@material-ui/core';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [user, setUser] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContext(e.target.value);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(postAdded(title, context, user));
  };

  return (
    <Card raised={true}>
      <Box p={2}>
        <Grid>
          <h1>Add Post Form</h1>
          <form>
            <Box m={2}>
              <Grid>
                <TextField
                  value={title}
                  label="Title"
                  onChange={handleTitleChange}
                  variant="outlined"
                ></TextField>
              </Grid>
            </Box>
            <Box m={2}>
              <Grid>
                <TextField
                  label="Content"
                  variant="outlined"
                  fullWidth
                  value={context}
                  onChange={handleContentChange}
                ></TextField>
              </Grid>
            </Box>
            <Box ml={2}>
              <UsersSelect handleChange={handleUserChange} />
              <br></br>
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Box>
    </Card>
  );
};
