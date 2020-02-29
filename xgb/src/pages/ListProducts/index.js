import React from 'react';

import data from '../../services/json.json'

/*Rotas*/
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/*Componentes*/
import { BuildField } from '../../components/BuildField/index'
import { ListClients } from '../../components/ListClients/index'
import { HelloUser } from '../../components/HelloUser/index'

import "./style.css"

class ListProducts extends React.Component {
	
	constructor(props){
    	super(props)
	    	this.state = {
	        name: '',
	        price: '', 
	        id: '',
	        stateProduct: false,
	        stateListProducts: [],
	        products: data.PRODUCTS,
	        budget: data.BUDGET

	      }
  	}

  	/*Atualizando o estado dos inputs*/
  	handleChange = (name, value) => this.setState({ [name]: value });

  	/*Busca o nome do produto inserido pelo usuário*/
	verifyProduct = (name, price) => this.state.products.map((product, i) => {
		if(name == product.name) {
			this.stateProduct = true
		}
	})
  	


 	/*Delete - CRUD - Products*/
 	onDeleteHandle() {
 		let id = arguments[0];

 		this.setState({
 			products: this.state.products.filter(item => {
 				if(item.id !== id ) {
 					return item
 				}
 			})
 		});
 	}

 	/*Update - CRUD - Products*/
 	renderEditForm() {

 		return(
 			<div className="form-edit-product">
 				<form onSubmit={this.onUpdateHandle.bind(this)}>
 					<h1 className="title-6">Edit this project</h1>

 					<h3>New Name of Product:</h3>
 					<input type="text" className="item-name"name="updateItemName" defaultValue={this.state.name}/>
 					
 					<h3>New Price of Product:</h3>
 					<input type="text" className="item-price"name="updateItemPrice" defaultValue={this.state.price}/>
 					<button className="update-add-item">It is great for me!</button>
 				</form>
 			</div>
 		);	
 	}

 	onEditHandle(event) {

 		this.setState({
 			id: arguments[0], 
 			name: arguments[1],
 			price: arguments[2]
 		});

 		
 	}

 	onUpdateHandle(event) {
 		event.preventDefault();

 		this.setState({
 			products: this.state.products.map(item => {
 				if (item.id === this.state.id) {
 					item['name'] = event.target.updateItemName.value;
 					item['price'] = event.target.updateItemPrice.value;

 					return item;
 				}
 				return item;
 			})

 			
 		})
 	}


  	handleSubmitForm = event => { 
    	event.preventDefault();

    	const { name, price } = this.state;

    	if(!name || !price){
     		alert("Por favor, preencha os campos!")
    	}else {
    		this.verifyProduct(name, price)

    		if(!this.stateProduct){

    				/*Create - CRUD - Products*/
    				this.setState({
    					products: [...this.state.products, {id: Date.now(), price: price, name: name }]
    				});
      			
    		} else if (this.stateProduct){
    			alert("Este produto já existe")
    		}

		}
	}

	/*Create - CRUD - Orçamento*/
	onBuyProducts () {

		let idBuy = arguments[0]
		let prodBuy = arguments[1]
		let priceBuy = arguments[2]

		this.state.budget.map((bud, i) => {

			if(bud.id == 1){
				this.setState({
				    budget: [...this.state.budget, {
				    	id: Date.now(), 
				    	client: bud.client, 
				    	productsClient: [...bud.productsClient, prodBuy],
				    	value: [...bud.value, priceBuy],
				    	date: Date.now 
			    	}]
			    });
			}
		})
	}

	render(){
    	return (
		    <>

		    	
		        <h1 className="title-3">Choice your products and click in <span>To Buy</span></h1>
		        <div className="form-class">
			       	<form  onSubmit={this.handleSubmitForm}>
			        	<h2 className="title-4">Post a new product!</h2>

				          <BuildField 
				            title={"Name:"} 
				            value={this.state.name} 
				            handleChange={this.handleChange}
				            name = "name"
				          />

				          <BuildField 
				            title={"Price: "} 
				            value={this.state.price} 
				            handleChange={this.handleChange}
				            name = "price"
				            placeholder={"$"}
				          />

			        <button type="submit" className="create-product">Create a new project!</button>
			        </form>
			    </div>

		        
		        
		       <div className="list-products">

		      	<h2 className="title-5">List of Products</h2>

		       	<td className="sub-title">Name</td>

		       	<td className="sub-title">Price</td>

                {

					this.state.products.map((product, i) => {
						return (
							<>

							<tr key={product.id}>
								
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td><button className="delete-button" onClick={this.onDeleteHandle.bind(this, product.id)}>Delete</button></td>
								<td><button className="edit-button" onClick={this.onEditHandle.bind(this, product.id, product.name, product.price)}>Edit</button></td>
								<button className="buy-button" onClick={this.onBuyProducts.bind(this, product.id, product.name, product.price)}>Buy this</button>
							</tr>

							
							</>
						);
					})
				}
            </div>
            
            {this.renderEditForm()}


		    </>
   		);
	}
}

export default withRouter(ListProducts);

