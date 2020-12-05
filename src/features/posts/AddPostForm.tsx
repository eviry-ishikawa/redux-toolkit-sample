import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContext(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(postAdded(title, context, '1'));
    console.log('eteaf');
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
      </form>
    </div>
  );
};
