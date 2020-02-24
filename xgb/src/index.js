import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import * as serviceWorker from './serviceWorker';

/*Páginas e rotas*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ListProducts } from './pages/Main-List-Products'

ReactDOM.render(

	(
		<BrowserRouter>
			
				<Switch>
					<Route exact path="/" component={ App }/>
					<Route exact path="/pages/Main-List-Products" component={ListProducts}/>
				</Switch>
			
		</BrowserRouter>

	),
	document.getElementById('root')

);
	

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
