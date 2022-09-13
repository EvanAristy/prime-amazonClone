import React from 'react';
import './App.css';
// Components
import Header from './Header';

function App() {
  return (
    // BEM
    <div className="app">
     <h1>Hello World</h1>
     {/* Header */}
     <Header />
     {/* Home */}
    </div>
  );
}

export default App;
