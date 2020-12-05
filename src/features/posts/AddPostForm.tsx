import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UsersSelect } from '../users/UsersSelect';
import { postAdded } from './postsSlice';

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
    <div>
      <h1>Add Post Form</h1>
      <form>
        <label>Title</label>
        <input value={title} onChange={handleTitleChange}></input>
        <br />
        <label>Content</label>
        <input value={context} onChange={handleContentChange}></input>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <UsersSelect handleChange={handleUserChange} />
      </form>
    </div>
  );
};
