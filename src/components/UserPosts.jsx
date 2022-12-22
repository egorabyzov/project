import React from 'react';
import Page from './Page';

// условно нам это приходит из БД

export default function UserPosts({ initiatives }) {
  return (
    <div className="container">
      <h2 style={{ marginTop: '20px' }}>Городские инициативы</h2>
      <div>{initiatives?.map((init) => <Page key={initiatives.id} initiatives={initiatives} />)}</div>
    </div>
  );
}
