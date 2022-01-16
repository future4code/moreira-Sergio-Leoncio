import React from "react";
//import styled from "styled-components";
import * as C from "./styledMsn"

class MsnComponentes extends React.Component {
    state = {
        campoUsuario: "",
        campoMsn: "",
        listaUsuario: []
    }
    usuarioInput = (event) =>
        this.setState({
            inputNome: event.target.value
        })

    msnInput = (event) =>
        this.setState({
            inputMsn: event.target.value
        })

    enviarMsn = () => {
        const novaListaUsuario = [
            ...this.state.listaUsuario,
            { nome: this.state.inputNome, msn: this.state.inputMsn }
        ]

        this.setState({
            listaUsuario: novaListaUsuario,
            inputNome: "",
            inputMsn: ""
        })
    }

    render() {
        const ListaDeUsuario = this.state.listaUsuario.map(
            (usuario, index) => {
                return (
                    <C.ContainerDisplay key={index}>
                        <strong>{usuario.nome}</strong>{usuario.msn}
                    </C.ContainerDisplay>
                )
            }
        )
        return (
            <div>
                <div>
                    {ListaDeUsuario}
                </div>
                <C.ContainerCampos>

                    <C.CamposInput
                        value={this.state.inputNome}
                        onChange={this.usuarioInput}
                        placeholder="Usuario"
                    />
                    <C.CamposInput
                        value={this.state.inputMsn}
                        onChange={this.msnInput}
                        placeholder="Mensagem"
                    />

                    <C.botao onClick={this.enviarMsn}>Enviar</C.botao>
                </C.ContainerCampos>
            </div>
        )
    }
}
export default MsnComponentes;