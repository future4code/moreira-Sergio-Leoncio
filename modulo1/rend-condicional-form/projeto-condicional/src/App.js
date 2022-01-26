import React from 'react';
import styledComponents from 'styled-components';
import './App.css';
import Etapa1 from './Componentes/Etapa1';
import Etapa2 from './Componentes/Etapa2';
import Etapa3 from './Componentes/Etapa3';
import Final from './Componentes/Final';

class App extends React.Component {
  state = {
    telaAtual: 1
  }

  telaEtapa1 = () => {
    this.setState({ telaAtual: this.state.telaAtual + 1 })
  }

  
  
  render() {

    const renderizaTelaCorreta = () => {
      switch (this.state.telaAtual) {
        case 1 :
          return <Etapa1 />
        case 2 :
          return <Etapa2 />
        case 3 :
          return <Etapa3 />                   
        default:
          return <Final  />
          
      }
    }

    return (
      <div className="App">
        {renderizaTelaCorreta()}
        <br></br>
        <button onClick={this.telaEtapa1}>Próxima Etapa</button>
        
        
      </div>
    );
  }
}
export default App;
