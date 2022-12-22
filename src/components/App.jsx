import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import OnePage from './OnePage';
import Reg from './Reg';
import AddInit from './AddInit';


export default function App({user}) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/add" element={<AddInit />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<Reg />} />
        <Route path="/page/:id" element={<OnePage />} />
      </Routes>
    </div>
  );
}
