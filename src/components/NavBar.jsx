import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (

    <nav className="navbar navbar-dark bg-dark" style={{ borderRadius: 12, marginTop: '7px', zIndex: 101 }}>
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/dom.png"
            alt=""
            style={{
              display: 'block', height: '50px', width: '50px', zIndex: 1000,
            }}
          />
        </Link>
        {user && (
        <h5 style={{ color: 'white' }}>
          Добро пожаловать,
          {' '}
          {user.name}
          !
        </h5>
        )}
        <div style={{ display: 'flex' }}>
          <ul className="navbar-nav me-auto mb-0-5 mb-lg-10">
            {!user ? (
              <div style={{ display: 'flex' }}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/auth/login">Authorization</Link>
                </li>
                <li className="nav-item" style={{ paddingLeft: '30px' }}>
                  <Link className="nav-link active" aria-current="page" to="/auth/reg">Registration</Link>
                </li>
              </div>
            )
              : (
                <div style={{ display: 'flex', marginRight: '30px' }}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/auth/logout">Exit</a>
                  </li>
                </div>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
