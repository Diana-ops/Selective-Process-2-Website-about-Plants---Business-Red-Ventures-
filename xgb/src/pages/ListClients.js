import React, { Component } from 'react';
import data from "./services/json"; 

export class ListClients extends Component {
	render() {
		return (
			<div className="listClients-class">
				<h2 className="title-2">Who buy at xGB too ... </h2>
	            <>
	                {
						data.CLIENTS.map((client, i) => {
							return (
								<div key={i} >
									<span>{client.name}</span>
								</div>
							);
						})
					}
	            </>
	        </div>
        );
    }
} 
