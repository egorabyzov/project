import React, { useState } from 'react';
// import { redirect } from 'react-router-dom';
import Page from './Page';

// условно нам это приходит из БД

export default function MainPage({ activity }) {
  // console.log(activity);
  const [cards, setCards] = useState(activity);

  const buttonHandler = () => { window.location.href = '/add'; };

  return (
    <div className="container">
      <h2 style={{ marginTop: '20px' }}>Городские инициативы</h2>

      <div style={{
        display: 'flex', flexWrap: 'wrap', columnGap: '25px', rowGap: '25px',
      }}
      >
        {cards?.map((init) => <Page key={init.id} activity={init} />)}
      </div>
      <button onClick={buttonHandler} style={{ margin: '0 auto', display: 'flex' }} type="button" className="btn btn-primary">Добавить инициативу</button>
    </div>
  );
}
