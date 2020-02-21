import React from 'react';
import logo from './logo.svg';

import { BuildField } from './BuildField'

export class Main extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        name: '',
        cpf: ''
      }
  }

  /*Atualizando o estado dos inputs*/
  handleChange = (name, value) => this.setState({ [name]: value });

  handleSubmitForm = event => { 
    event.preventDefault();

    const { name, cpf } = this.state;

    if(!name || !cpf){
      return alert(name)
    }
  };

  render(){
    return (
      <>
        <header className="header-class">
          <h1>Welcome to xGB ecomerce</h1>
        </header>

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
      </>
    );
  }
}