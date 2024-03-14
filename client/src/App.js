import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';



const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
