import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Reg from './Reg';

export default function App({user}) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<Reg />} />
      </Routes>
    </div>
  );
}
