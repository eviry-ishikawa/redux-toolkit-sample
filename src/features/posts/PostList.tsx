import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postsSlice';
import { SinglePostPage } from './SinglePostPage';

export const PostList: React.FC = () => {
  const posts = useSelector(selectAllPost);
  return (
    <div>
      {posts.map((post) => (
        <div>
          <SinglePostPage postId={post.id} />
        </div>
      ))}
    </div>
  );
};
