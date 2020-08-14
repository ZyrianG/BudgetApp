import React from 'react';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Expenses } from './components/Expenses';
import { Balance } from './components/Balance';

function App() {
  return (
    <div className="App flex mb-4 h-screen">
      <div className="side w-1/12">
        <Sidebar />
      </div>
      <div className="page-container w-11/12">
        <Header/>
        <div className="container">
            <Balance/>
            <Expenses/>
        </div>
      </div>
    </div>
  );
}

export default App;
