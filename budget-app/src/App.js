import React from 'react';
import { Header } from './components/Header';
import { Expenses } from './components/Expenses';
import { Balance } from './components/Balance';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
          <Balance/>
          <Expenses/>
      </div>
    </div>
  );
}

export default App;
