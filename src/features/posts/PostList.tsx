import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllPost } from './postsSlice';
import { ReactionButton } from './ReactionButton';
import { PostInfo } from './PostInfo';
import { AddPostForm } from './AddPostForm';

export const PostList: React.FC = () => {
  const posts = useSelector(selectAllPost);
  return (
    <div>
      {posts.map((post) => (
        <section key={post.id}>
          <PostInfo postId={post.id} />
          <ReactionButton postId={post.id} />
          <Link to={`/posts/${post.id}`}>View Post</Link>
        </section>
      ))}
      <div>
        <AddPostForm />
      </div>
    </div>
  );
};
