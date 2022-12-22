import React from 'react';

export default function Page({ activity }) {
  return (

    <div className="task" style={{ margin: '15px 0', flex: '1 1 45%' }}>
      <ul>
        <li style={{ listStyleType: 'none' }} className="pipe-separate t-light-green left">
          <a
            style={{ textDecoration: 'none' }}
            href={`/page/${activity.id}`}
          >
            {activity.title}


          </a>
        </li>

        <p style ={{color: 'gre'}}>
          Уровень инициативы:
          {activity.levelId}
        </p>

        {/* <li>{activity.description}</li> */}

      </ul>

    </div>

  // <div className="card" style={{ width: '18rem' }}>
  //   <div className="card-body">
  //     <a href="/" className="card-title">{activity.title}</a>
  //     <p className="card-subtitle mb-2 text-muted">
  //       Уровень инициативы:
  //       {' '}
  //       {activity.level}
  //     </p>

  //   </div>
  // </div>

  // <div className="container text-center">
  //   <div className="row">
  //     <div className="col">
  //       <div className="card" style={{ width: '18rem' }}>
  //         <div className="card-body">
  //           <a href="/" className="card-title">{activity.title}</a>
  //           <p className="card-subtitle mb-2 text-muted">
  //             Уровень инициативы:
  //             {' '}
  //             {activity.level}
  //           </p>

  //         </div>
  //       </div>
  //     </div>
  //     <div className="col">
  //       <div className="card" style={{ width: '18rem' }}>
  //         <div className="card-body">
  //           <a href="/" className="card-title">{activity.title}</a>
  //           <p className="card-subtitle mb-2 text-muted">
  //             Уровень инициативы:
  //             {' '}
  //             {activity.level}
  //           </p>

  //         </div>
  //       </div>
  //     </div>

  //   </div>
  // </div>
  );
}
