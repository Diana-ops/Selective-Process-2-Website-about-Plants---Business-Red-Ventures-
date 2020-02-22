import React, { Component } from 'react';
import { BuildField } from './BuildField'
import data from './services/json.json'
export class LoginForm extends Component {
	  constructor(props){
      super(props)
      this.state = {
        name: '',
        cpf: '', 
        stateLogin: false,
        stateListClients: []
      }
  }
	render() {
		return (
			<>
            <form className="form-class" onSubmit={this.handleSubmitForm}>
          <h2>Entrar</h2>

          <BuildField 
            title={"Name:"} 
            value={this.state.name} 
            handleChange={this.handleChange}
            name = "name"
          />

          <BuildField 
            title={"CPF:"} 
            value={this.state.cpf} 
            handleChange={this.handleChange}
            name = "cpf"
          />

          <button type="submit">Entrar</button>
        </form>

          <button onClick={this.subimitNewLogin} type="submit">Cadastrar</button>
          </>
        );
    }
} 