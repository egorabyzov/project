import React from 'react';

export default function OnePage() {
  const buttonHandler = () => { window.location.href = '/user/id'; };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{posts.title}</h5>
        <p className="card-text">{posts.description}</p>
        <p className="card-text">
          Всего голосов:
          {' '}
          {posts.for + posts.against}
        </p>
        <p className="card-text">
          {posts.for}
          {' '}
          голосов за
        </p>
        <button type="button" className="btn btn-dark" style={{ marginRight: '20px' }}>Проголосовать за</button>
        <button type="button" className="btn btn-dark" style={{ marginRight: '20px' }}>Проголосовать против</button>
        <button type="button" onClick={buttonHandler} className="card-link">Другие инициативы автора</button>
      </div>
    </div>
  );
}
