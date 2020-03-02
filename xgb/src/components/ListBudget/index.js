import React, { Component } from 'react';

/*Dados*/
import data from "../../services/json"; 
let budget = data.BUDGET

export const ListBudget = (props) => {

    let { nameUser, id } = props

    const sayHello = (event) => {
   		
    	budget[id].productsClient.map((itemJson, i) => {
    		if(itemJson == event) {
    			alert(event)
    		}
    	})
  	}

    return (
			<>
		{

						budget[id].productsClient.map((itemJson, i) => {

								return(
									<>
										
										<td>{itemJson}</td>
										<button onClick={sayHello(itemJson)}>Excluir compra</button>
										
										
									</>
								);
						})


						
			}

					{

						budget[id].value.map((itemJson, i) => {

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
