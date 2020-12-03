import React from 'react';
import { PostList } from './features/posts/PostList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { PostPage } from './features/posts/PostPage';
import { UserPage } from './features/users/UserPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={PostList} />
      <Route path="/posts/:postId" component={PostPage} />
      <Route path="/users/:userId" component={UserPage} />
      {/* <div className="App">
        <PostList />
      </div> */}
    </Router>
  );
}

export default App;
