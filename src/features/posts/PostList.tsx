import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllPost } from './postsSlice';
import { ReactionButton } from './parts/ReactionButton';
import { PostInfo } from './parts/PostInfo';
import { AddPostForm } from './parts/AddPostForm';

export const PostList: React.FC = () => {
  const posts = useSelector(selectAllPost);
  return (
    <div className="mx-auto px-8">
      <div>
        <AddPostForm />
      </div>
      <h1>Post Lists</h1>
      {posts.map((post) => (
        <section key={post.id}>
          <PostInfo postId={post.id} />
          <ReactionButton postId={post.id} />
          <Link to={`/posts/${post.id}`}>View Post</Link>
        </section>
      ))}
    </div>
  );
};
