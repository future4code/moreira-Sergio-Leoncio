import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(), //gera um numero único para cada tarefa
        texto: 'Texto da primeira tarefa',
        completa: false
      },

      {
        id: Date.now() + 1,
        texto: 'Texto da segunda tarefa',
        completa: true
      }
    ],

    inputValue: '',
    filtro: ''
  }

  salvarLocalStorage = () => {
    localStorage.setItem("texto", this.state.texto);

  };
  buscarLocalStorage = () => {
    const texto = localStorage.getItem("texto");

    this.setState({
      texto: texto || ""
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
     if (prevState.completa === this.state.completa) {
       this.salvarLocalStorage();
       console.log("update");
     }
    
  };

  componentDidMount = () => {
    this.buscarLocalStorage();
  };



  onChangeInput = (event) => {
    console.log(event.target.value)
    this.setState({ inputValue: event.target.value })
    console.log(this.state)
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaTarefa = [novaTarefa, ...this.state.tarefas]
    console.log(novaListaTarefa)
    this.setState({ tarefas: novaListaTarefa })
    console.log(this.state.tarefas)
  }

  selectTarefa = (id) => {
    const novaListaTarefa = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novoLista = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novoLista
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaTarefa })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
