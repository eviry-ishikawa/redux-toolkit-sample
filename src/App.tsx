import React from 'react';
import { PostList } from './features/posts/PostList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PostPage } from './features/posts/PostPage';
import { UserPage } from './features/users/UserPage';
import { NavBar } from './components/NavBar';
import { UsersList } from './features/users/UsersList';
import { Box } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Box mt={2}>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/:postId" component={PostPage} />
        <Route exact path="/users" component={UsersList} />
        <Route path="/users/:userId" component={UserPage} />
      </Box>
    </Router>
  );
};

export default App;
