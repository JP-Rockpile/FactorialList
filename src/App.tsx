import React from 'react';
import logo from './logo.svg';
import './App.css';
import FactorialList from "./FactorialList";

const App: React.FC = () => {
    // 1. Accepts only one prop called num which is a positive integer
  const num = 10;

  return (
      <div className="App">
        <header className="App-header">
          <FactorialList num={num} />
        </header>
      </div>
  );
};

export default App;
