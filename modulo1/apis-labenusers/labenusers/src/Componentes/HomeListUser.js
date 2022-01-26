import React from "react";
import styled from "styled-components";






class HomeListUser extends React.Component {

    render(){
       
        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Muda p/ Cadastro</button>
                <h3>Procurar usuário</h3>                                      
            </div>
        )
    }
}
export default HomeListUser;