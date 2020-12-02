import React from 'react';
import { PostList } from './features/posts/PostList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { PostPage } from './features/posts/PostPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={PostList} />
      <Route path="/posts/:postId" component={PostPage} />
      {/* <div className="App">
        <PostList />
      </div> */}
    </Router>
  );
}

export default App;
