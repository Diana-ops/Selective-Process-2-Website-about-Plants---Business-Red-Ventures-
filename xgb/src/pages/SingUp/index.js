/*Construção da tela de login*/

/*To Do:
  - Cadastra clientes
  - Verifica existencia de clientes
  - Lista clientes
*/
import React from 'react';
import "./style.css"

/*Rotas*/
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/*Dados JSON*/
import data from '../../services/json.json'

/*Componentes*/
import { BuildField } from '../../components/BuildField/index'
import { ListClients } from '../../components/ListClients/index'



let clients = data.CLIENTS;
let budget = data.BUDGET;
let newId = (Object.keys(clients).length) + 1

class SingUp extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        id: newId,
        name: '',
        cpf: '', 
        error: '',
        aviso: '',
        stateLogin: false,
        loginExistent: false,
        stateListClients: []
      }
  }


  /*Atualizando o estado dos inputs*/
  handleChange = (name, value) => this.setState({ [name]: value });

  /*Busca CPF inserido pelo usuário*/
  verifyLogin = (name, cpf) => clients.map((itemJson, i) => {
    if(itemJson.cpf == cpf && itemJson.name == name){
      this.loginExistent = true
    } 
    
  })

  /*Create - Clients - CRUD*/
  createLogin = (name, cpf, id) => clients.push({
        "id": id,
        "name": name,
        "cpf": cpf,
        "token": false
  })

  /*Create - Budget - CRUD*/
  createBudget = ( name, id ) => budget.push({
      "id": id,
      "client": name,
      "productsClient": {}, 
      "date": null 
  })

  changeToken = (name, cpf) => clients.map((itemJson, i) => {

    if(itemJson.cpf == cpf && itemJson.name == name){
      itemJson.token = true
    }
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

  showButtonLogin() {
    if(this.stateLogin) {

      this.loginExistent = false

      const { name, cpf} = this.state;

      this.changeToken(name, cpf)
      return(
          <div className="entrar-button">
          <Link to="/list-products" className="entrar-button-text">
            Sing In
          </Link>
          </div>
        
      );
    }
  }

  subimitNewLogin = event => { 
     event.preventDefault();

     this.listClients()

     const { name, cpf, id } = this.state;

     this.verifyLogin(name, cpf)

     if (!name || !cpf ) {
        this.setState({ error: "Preencha todos os dados para se cadastrar" });
        this.setState({ aviso: " " });
      }

     else if (!this.loginExistent){
        this.createLogin(name, cpf, id)
        this.createBudget(name, id)
        this.setState({ aviso: "Usuáio criado" });
        this.setState({ error: " " });
        this.stateLogin = true
        

      } else {
        this.setState({ error: "Usuáio existente" });
        this.setState({ aviso: " " });
        this.stateLogin = true
      }
  };

  render(){
    return (
      <>

        
        <div className="form-clients">
          <header className="header-class">
            <h1 className="title-1">Welcome to online commerce of xGB</h1>
          </header>


          <form className="form-class-register">
            {this.state.error && <p className="msg-erro">{this.state.error}</p>}
            {this.state.aviso && <p className="msg-aviso">{this.state.aviso}</p>}
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
            
              <button className="cadastrar-button" onClick={this.subimitNewLogin} type="submit">Register</button>

              {this.showButtonLogin()}
            
          </form>

          
          </div>

          <ListClients />

      </>
    );
  }
}

export default withRouter(SingUp);