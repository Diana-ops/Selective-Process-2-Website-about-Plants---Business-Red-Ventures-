import React from 'react';
import logo from './logo.svg';
import './App.css';

import { PRODUCTS, CLIENTS, BUDGET } from './services/json'

import { Main } from './Main'

function App() {
  return (
    <div className="main-class">
      <Main />
    </div>
  );
}

export default App;
