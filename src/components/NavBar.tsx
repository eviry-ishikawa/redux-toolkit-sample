import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="flex space-x-px">
      <Link to="/">
        <span className="font-sans">Posts</span>
      </Link>
      /<Link to="/users">Users</Link>
    </div>
  );
};
