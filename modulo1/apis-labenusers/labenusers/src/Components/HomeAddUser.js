import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;    
`


class HomeAddUser extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
       //console.log(this.state)
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body = {
           name: this.state.nome,
           email: this.state.email
       }
       axios.post(url, body, {
           headers: {
               Authorization: "sergio-henrique-moreira"
           }
       })
       .then((res) => {
          // console.log(res)
          alert("Usuário(a) cadastrado(a) com sucesso!")
          this.setState({nome:"", email:""})
        })       
       .catch((err) => {
          // console.log(err.response.data)
          alert(err.response.data.message)
       })
    }

    render(){
        return(
            <Container>
                <button onClick={this.props.irParaList}>Muda p/ Lista</button>
                <h2>Cadastro de Usuário</h2>
                <input 
                placeholder={'Nome'}
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <br/>
                <input 
                placeholder={'E-mail'}
                value={this.state.email}
                onChange={this.handleEmail}
               />
               <br/>
                <button onClick={this.fazerCadastro}>Cadastrar</button>

            </Container>
        )
    }
}
export default HomeAddUser;