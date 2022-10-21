import React from 'react';
import {  Route, Routes } from 'react-router-dom';
// Css
import './App.css';
// Components
import Header from './Components/Header';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Login from './Components/Login';

function App() {
  return (
    // BEM
    
      <div className="app">
        
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        
      </div>
    
  );
}

export default App;
