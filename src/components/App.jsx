import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import MainPage from './MainPage';
import NavBar from './NavBar';
import OnePage from './OnePage';
import Reg from './Reg';
import AddInit from './AddInit';
import UserPosts from './UserPosts';

export default function App({ user, post, activity }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage activity={activity} />} />
        <Route path="/add" element={<AddInit />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<Reg />} />
        <Route path="/page/:id" element={<OnePage post={post} />} />
        <Route path="/user/:id" element={<UserPosts />} />
      </Routes>
    </div>
  );
}
