import React from 'react';

export default function Page({ init }) {
  // console.log(init.Level);
  return (

    <div className="task" style={{ margin: '30px 0', flex: '1 1 45%' }}>
      <ul style ={{marginLeft: "-30px"}} >
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
            {init.Level.name}
          </p>
          <p> Категория: {init.Category.name}</p>
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
