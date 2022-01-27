import React from "react";
import styled from "styled-components";
import HomeAddUser from "./Components/HomeAddUser";
import HomeListUser from "./Components/HomeListUser";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

class App extends React.Component {

    state = {
        telaAtual: "addUser"
    }

    trocaTela = () => {
        switch (this.state.telaAtual){
            case 'addUser':
                return <HomeAddUser irParaList={this.irParaList}/>
            case 'list':
                return <HomeListUser irParaCadastro={this.irParaCadastro}/>
            default:
                return <di>Erro! Página não encontrada</di>
        }
    }   

    irParaCadastro = () => {
        this.setState({telaAtual: 'addUser'})
    }

    irParaList = () => {
        this.setState({telaAtual: 'list'})
    }


    render(){

        return(
            <Container>                
                <h1><u>Labenusers</u></h1>               
                {this.trocaTela()}
            </Container>
        )
    }
}
export default App;