import React from "react";
import styled from "styled-components";
import axios from "axios";
import App from "../App";




class HomeListUser extends React.Component {

    render(){
       
        return(
            <div>
                <h3>Procurar usuário</h3>
                <input
                    placeholder="Buscar nome:"
                    value={this.props.nome}
                    onChange={this.props.onChangeNome}
                />
                <button onClick={this.props.getBusca}>Salvar edição</button>
                    
            </div>
        )
    }
}

export default HomeListUser;