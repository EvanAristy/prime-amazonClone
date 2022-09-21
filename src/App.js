import React from 'react';
import {  Route, Routes } from 'react-router-dom';
// Css
import './App.css';
// Components
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    // BEM
    
      <div className="app">
        
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        
      </div>
    
  );
}

export default App;
