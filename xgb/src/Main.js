import React from 'react';
import logo from './logo.svg';

import { BuildField } from './BuildField'

import data from './services/json.json'
import { ListClients } from './ListClients'

let clients = data.CLIENTS;

export class Main extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        name: '',
        cpf: '', 
        stateLogin: false,
        stateListClients: []
      }
  }

  /*Atualizando o estado dos inputs*/
  handleChange = (name, value) => this.setState({ [name]: value });

  /*Busca CPF inserido pelo usuário*/
  verifyLogin = (name, cpf) => clients.map((nameJson, i) => {
    if(nameJson.cpf == cpf){
      this.stateLogin = true
    } 
  })

  /*Create - Clients - CRUD*/
  createLogin = (name, cpf) => clients.push({
        "id": "56",
        "name": name,
        "cpf": cpf
  })

  /*Read - Clients - CRUD*/
  listClients = () => {
    
    const text = []
    data.CLIENTS.map((experience, i) => {
          text.push(experience.name)
    })

    this.setState({
      stateListClients: text
    });
    
  }

  handleSubmitForm = event => { 
    event.preventDefault();

    const { name, cpf } = this.state;

    if(!name || !cpf){
      alert("Por favor, preencha os campos!")
    }
    else {
      this.verifyLogin(name, cpf)
      if(this.stateLogin){
        alert("Acesso Autorizado")
      } else {
        alert("Este usuário não existe ou os dados ou estão incorretos!")
      }
    }
  };

  subimitNewLogin = event => { 
     event.preventDefault();

     this.listClients()

     const { name, cpf } = this.state;

     this.verifyLogin(name, cpf)
     if(!this.stateLogin){
        this.createLogin(name, cpf)
        alert("Usuáio criado")
      } else {
        alert("Usuáio existente")
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

          <button onClick={this.subimitNewLogin} type="submit">Cadastrar</button>

          <h2>Quem compra na xGB</h2>

          <ListClients />
          
      </>
    );
  }
}