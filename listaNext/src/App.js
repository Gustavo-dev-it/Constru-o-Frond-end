// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/userList';
import UserDetails from './pages/userDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  </Router>
);

export default App;