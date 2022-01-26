import React from "react";
import HomeListUser from "./Componentes/HomeListUser";
import HomeAddUser from "./Componentes/HomeAddUser";

class App extends React.Component  {
  
state = {      
    telaAtual: "addUser"}

trocaTela = () => {
  switch (this.state.telaAtual){
    case "addUser":
      return <HomeAddUser irParaLista={this.irParaLista}/>
    case "list":
      return <HomeListUser irParaCadastro={this.irParaCadastro}/>
    default:
      return <div>Erro! Página não encontrada</div>
  }
}
irParaCadastro = () => {
  this.setState({telaAtual: "addUser"})
}
irParaLista = () => {
  this.setState({telaAtual: "list"})
}
  render() {
   
    return (
       <div >
            {this.trocaTela}            
       </div>

   );
  }
}
export default App;