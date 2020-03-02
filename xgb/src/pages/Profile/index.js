import React from 'react';

/*Rotas*/
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/*Componentes*/
import { ListBudget } from '../../components/ListBudget/index'

/*Dados*/
import data from "../../services/json"; 

let client = data.CLIENTS;
let budget = data.BUDGET;

class Profile extends React.Component {

	constructor(props){
    	super(props)

    	this.state = {
    		myClient: "",
    		idClient: 0,

    		/*Data*/
	        budget: data.BUDGET
    	}
    }

	myShopping(){

		return(<button><Link to="/list-products">Minhas Compras</Link></button>);
	}

	findClient() {

		client.map((itemClient, i) => {
			if(itemClient.token == true) {
				this.setState({
     				myClient: itemClient.name
    			});

    			this.setState({
     				idClient: itemClient.id - 1
    			});


			}

		})
    }

    /*Delete - CRUD - Products*/
 	onDeleteHandle() {

 		const { idClient } = this.state

 		let itemToDelete = arguments[0];

 		
 	}



	render(){
		return(
			<>
				<h1>My Profile</h1>

				{ this.myShopping() }

				<button onClick={(e) => this.findClient()}>Mostrar Minhas Compras</button>

				{

						this.state.budget[this.state.idClient].productsClient.map((itemJson, i) => {

								
									return(
										<>
											
											<td>{itemJson}</td>
											
											
											
										</>
									);
							
							
						})


						
			}


			</>
		);
	}
}

export default withRouter(Profile);