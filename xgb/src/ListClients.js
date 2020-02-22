import React, { Component } from 'react';
import data from "./services/json"; 

export class ListClients extends Component {
	render() {
		return (
            <div>
                {
					data.CLIENTS.map((client, i) => {
						return (
							<div key={i}>
								<span>{client.name}</span>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
