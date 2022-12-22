import React from 'react';

export default function Page({ activity }) {

  return (
    <div className="task" style={{ margin: '15px 0' }}>
      <ul>
        <li style={{ listStyleType: 'none' }} className="pipe-separate t-light-green left">
          <a
            style={{ textDecoration: 'none' }}
            href={`/page/${activity.id}`}
          >
            {activity.title}

          </a>
        </li>
       
        <li>{activity.for}</li>
        <li>{activity.description}</li>

      </ul>

    </div>
  );
}
