import React from 'react';

export default function OnePage() {
  const buttonHandler = () => { window.location.href = '/user/id'; };

  const posts = {
    id: 1,
    title: 'Выполнение работ в городской гимназии',
    description: 'За последние десятилетия поражаемость населения Российской Федерации кариесом зубов резко повысилась, особенно у детей. На долю кариеса зубов и его осложнений (пульпит, периодонтит, периостит и др.) приходится более 60% объёма стоматологической помощи, требующей существенных трудовых затрат и материально-технических ресурсов. При несвоевременной профилактике и лечении кариеса зубов (включая временный прикус - временные зубы) возникают осложнения: пульпит, периодонтит, периостит вплоть до одонтогенных воспалительных процессов, в итоге может иметь место выпадание зубов, требующее их протезирования, связанного со значительными материальными расходами. Заболевание слизистой оболочки рта (особенно пародонтиты) приводят к расшатыванию.',
    for: 100,
    against: 26,
    term: '05.01.2023',
    levelId: 1,
    categoryId: 2,
    status: true,
    userId: 1,
  };

  // const handler = () =>

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
