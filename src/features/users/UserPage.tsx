import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../app/store';
import { selectPostById, selectPostByUser } from '../posts/postsSlice';
import { selectUserById } from './usersSlice';

export const UserPage: React.FC = () => {
  const { userId } = useParams();
  const user = useSelector((state: RootState) => selectUserById(state, userId));

  const posts = useSelector((state: RootState) =>
    selectPostByUser(state, userId),
  );

  return (
    <div>
      {user?.name} ' s post
      {posts?.map((post) => (
        <div key={post.id}>
          <ul>
            <li>
              <p>
                Title:{post.title}
                Content:{post.content}
              </p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
