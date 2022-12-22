import React from 'react';

export default function OnePage({ activity }) {
  const buttonHandler = () => { window.location.href = '/user/id'; };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{activity.title}</h5>
        <p className="card-text">{activity.description}</p>
        <p className="card-text">
          Всего голосов:
          {' '}
          {activity.for + activity.against}
        </p>
        <p className="card-text">
          {activity.for}
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
