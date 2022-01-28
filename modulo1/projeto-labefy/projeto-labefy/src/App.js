import React from "react";
import styled from "styled-components";
import AddPlayList from "./Components/AddPlayLists";
import DetalhePlayList from "./Components/DetalhePlayList";
import VisualizarPlayList from "./Components/VisualizarPlayList";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;      
    }
`

class App extends React.Component {
  state = {
    telaAtual: "visualizar",
    clickDetalhes: ""
  }

  nextDetalhe = (id) => {
    this.setState({telaAtual: "Detalhes", clickDetalhes: id })
  }
  nextVisualiza = () => {
    this.setState({telaAtual:"visualizar", clickDetalhes: ""})
  }
  nextAdiciona = (id) => {
    this.setState({telaAtual:"Adicionar", clickDetalhes: id})
  }

  mudaTela = () => {
    switch(this.state.telaAtual){
      case "visualizar":
        return <VisualizarPlayList nextDetalhe={this.nextDetalhe}/>
      case "Detalhes":
        return <DetalhePlayList nextAdiciona={this.nextAdiciona} nextVisualiza={this.nextVisualiza} id={this.state.clickDetalhes}/>
      
      case "Adicionar":
        return <AddPlayList nextVisualiza={this.nextVisualiza}/>
      default:
        return <VisualizarPlayList nextDetalhe={this.nextVisualiza}/>
    }
  }
  
  render(){
    return (
      <Container>
          <h1>PlayList Solta o Som</h1>
          <div>{this.mudaTela()}</div>
      </Container>
    );
  }
  
}

export default App;
