import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postsSlice';
import { ReactionButton } from './ReactionButton';
import { SinglePostPage } from './SinglePostPage';

export let PostList: React.FC = () => {
  const posts = useSelector(selectAllPost);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <SinglePostPage postId={post.id} />
          <ReactionButton postId={post.id} />
        </div>
      ))}
    </div>
  );
};

PostList = React.memo(PostList);
