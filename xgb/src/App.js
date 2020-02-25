import React from 'react';
import './App.css';

import { Main } from './pages/Main'

import { ListProducts } from './pages/Main-List-Products'


function App() {
  return (
  	<div className="fundo">
  		<img className="logo" src="logoXGB.png" alt="logo XGB" heigth="150" width="150"/>
	    <div className="main-class">
	     	<Main />
	    </div>


    </div>
  );
}

export default App;
