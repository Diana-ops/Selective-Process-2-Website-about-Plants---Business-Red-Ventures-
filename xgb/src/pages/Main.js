/*Construção da tela de login*/

/*To Do:
  - Cadastra clientes
  - Verifica existencia de clientes
  - Lista clientes
*/
import React from 'react';

import "./style/Main.css"

import data from './services/json.json'

import { BuildField } from './BuildField'
import { ListClients } from './ListClients'

import { Link } from 'react-router-dom'

import { ListProducts, helloUser } from './Main-List-Products'

import { HelloUser } from './helloUser'

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
    data.CLIENTS.map((client, i) => {
          text.push(client.name)
    })

    this.setState({
      stateListClients: text
    });
    
  }

  /*Verifica o acesso e migra para a próxima página*/
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
        return <h1>Ola Diana</h1>

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

        
        <div className="form-clients">
          <header className="header-class">
            <h1 className="title-1">Welcome to online commerce of xGB</h1>
          </header>


          <form className="form-class" onSubmit={this.handleSubmitForm}>

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
            
            <button className="entrar-button" type="submit">Sing In</button>
            <button className="cadastrar-button"onClick={this.subimitNewLogin} type="submit">Register</button>
          </form>

            

          </div>

          <ListClients />

          <HelloUser title={this.state.name} />

          <ListProducts />
      </>
    );
  }
}