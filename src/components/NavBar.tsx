import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Grid container alignItems="center" justify="center">
      <div>
        <Link to="/">Posts</Link> /<Link to="/users">Users</Link>
      </div>
    </Grid>
  );
};
