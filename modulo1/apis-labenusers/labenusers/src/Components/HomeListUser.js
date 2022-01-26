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

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

class HomeListUser extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "sergio-henrique-moreira"
            }
        })
        .then((res) => {
           // console.log(res)
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
          // console.log(err)
           alert("Ocorreu um problema, tente novamente!!!")
        })
    }
    

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "sergio-henrique-moreira"
            }
        })
        .then((res) =>{
            //console.log(res)
            alert("Usuário(a) deletado(a) com sucesso!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            //console.log(err.response.data)
            alert("Ocorreu um problema, tente novamente!!!")
        })
    }

    render(){        
        //console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                    {user.name}
                     <button onClick={() => this.deletarUsuario(user.id)}>x</button>
                  </CardUsuario>
        })        

        return(
            <Container>
                <button onClick={this.props.irParaCadastro}>Muda p/ Cadastro</button>
                <h2>Lista de Usuário</h2>
                {listaUsuarios}
            </Container>
        )
    }
}
export default HomeListUser;