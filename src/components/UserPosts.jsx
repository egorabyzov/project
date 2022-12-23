import React from 'react';
import PersonalPosts from './PersonalPosts';

// условно нам это приходит из БД

export default function UserPosts({ posts }) {

  return (
    <div className="container">
      <h2 style={{ marginTop: '20px' }}>Городские инициативы</h2>
      <div>{posts?.map((init) => <PersonalPosts key={init.id} posts={init} />)}</div>
    </div>
  );
}
