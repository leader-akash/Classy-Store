import './App.css';
import { ReactDOM } from 'react';
import HomePage from './pages/HomePage'
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Login from './pages/Login';

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   </>
    
  );
}

export default App;
