import React from "react";
import styled from "styled-components";






class HomeAddUser extends React.Component {

    render(){
       
        return(
            <div>
                <button onClick={this.props.irParaLista}>Muda p/ Lista</button>                                     

                <h3>Cadastro de usuários</h3> 
            </div>
        )
    }
}
export default HomeAddUser;