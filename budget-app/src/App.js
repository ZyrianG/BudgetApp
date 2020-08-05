import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header';
import { Expenses } from './components/Expenses';
import { Balance } from './components/Balance';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
          <Balance/>
          <Expenses/>
      </div>
    </div>
  );
}

export default App;
