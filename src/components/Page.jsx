import React from 'react';

export default function Page({ init }) {
  return (

    <div className="task" style={{ margin: '15px 0', flex: '1 1 45%' }}>
      <ul>
        <li style={{ listStyleType: 'none' }} className="pipe-separate t-light-green left">
          <a
            style={{ textDecoration: 'none' }}
            href={`/page/${init.id}`}
          >
            {init.title}

          </a>
        </li>
        <div style={{ color: 'grey', marginTop: '20px', lineHeight: '10px' }} className="contentInit">
          <p>
            Уровень инициативы:
            {init.levelId}
          </p>
          <p>
            {' '}
            Всего голосов:
            {init.for + init.against}
          </p>
          <p>
            {' '}
            Срок окончания:
            {init.term}
          </p>
        </div>
        {/* <li>{activity.description}</li> */}

      </ul>

    </div>

  );
}
