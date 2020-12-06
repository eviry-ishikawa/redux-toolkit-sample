import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Posts</Link> /<Link to="/users">Users</Link>
    </div>
  );
};
