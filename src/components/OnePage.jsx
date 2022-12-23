import React, { useState } from 'react';

export default function OnePage({ post }) {
  const buttonHandler = () => { window.location.href = '/user/id'; };
  const [bu, setBu] = useState({ count: '' });

  const buHandler = () => {
    setBu((prev) => ({ ...prev, count: post.for += 1 }));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <p className="card-text">
          Всего голосов:
          {' '}
          {post.for + post.against}
        </p>
        <p className="card-text">
          {post.for}
          {' '}
          голосов за
        </p>
        <button onClick={buHandler} type="button" className="btn btn-dark" style={{ marginRight: '20px' }}>Проголосовать за</button>
        <button type="button" className="btn btn-dark" style={{ marginRight: '20px' }}>Проголосовать против</button>
        <button type="button" onClick={buttonHandler} className="card-link">Другие инициативы автора</button>
      </div>
    </div>
  );
}
