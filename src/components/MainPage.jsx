import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Page from './Page';

// условно нам это приходит из БД

export default function MainPage() {
  // activity это приходящий массив из БД
  const activity = [{
    id: 2,
    name: 'Выполнение работ в городской гимназии',
    count: 'Количество проголосовавших: 126',
    level: 'Уровень: федеральный',
    status: 'Статус: заявка одобрена',
  }, {
    id: 3,
    name: 'Ремонт детской площадки',
    count: 'Количество проголосовавших:223',
    level: 'Уровень: региональный',
    status: 'Статус: заявка одобрена',
  }];
  // const buttonHandler = () => {
  //   fetch('/cards')
  //   .then(() => )
  // };
  return (
    <div className="container">
      <h2 style={{ marginTop: '20px' }}>Городские инициативы</h2>

      <div>{activity?.map((init) => <Page key={init.id} activity={init} />)}</div>
      <button onClick={buttonHandler} style={{ margin: '0 auto', display: 'flex' }} type="button" className="btn btn-primary">Добавить инициативу</button>
    </div>
  );
}
