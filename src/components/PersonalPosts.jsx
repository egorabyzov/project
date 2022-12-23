import React from 'react';

export default function PersonalPosts({ posts }) {
  return (
    <div className="task" style={{ margin: '15px 0' }}>
      <ul>
        <li style={{ listStyleType: 'none' }} className="pipe-separate t-light-green left">
          <a
            style={{ textDecoration: 'none' }}
            href={`/page/${posts.id}`}
          >
            {posts.title}

          </a>
        </li>
        <li>{posts.description}</li>

      </ul>

    </div>
  );
}
