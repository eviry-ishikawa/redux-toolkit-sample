import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UsersSelect } from '../../users/parts/UsersSelect';
import { postAdded } from '../postsSlice';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';

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
    <Grid>
      <h1>Add Post Form</h1>
      <form>
        <Grid>
          <TextField
            value={title}
            label="Title"
            onChange={handleTitleChange}
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid>
          <TextField
            label="Content"
            variant="outlined"
            value={context}
            onChange={handleContentChange}
          ></TextField>
        </Grid>
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
      </form>
    </Grid>
  );
};
