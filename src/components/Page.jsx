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
            {activity.name}

          </a>
        </li>
        <li>{activity.count}</li>
        <li>{activity.level}</li>
        <li>{activity.status}</li>

      </ul>

    </div>
  );
}
