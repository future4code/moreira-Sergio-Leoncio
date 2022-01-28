import React from "react";
import axios from "axios";
import styled from "styled-components";
import {add_URL, headers} from "./url";

const CardMusica = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
}
    button {
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: red;
  color: white;
  :hover{
   opacity: .5;
}
`


class AddPlayList extends React.Component {
  state = {
    nome:"",
    artista:"",
    url:""
  }
  
  addTrackToPlaylist = () => {
      const body = {
        nome: this.state.nome,
        artista: this.state.artista,
        url: this.state.url
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks", body, headers)
      .then((res)=>{
        alert("Música cadastrada com sucesso!")
        this.setState({nome: "", artista: "", url: ""})
      })
      .catch((err)=>console.log(err.res))
  }

  inputNome = (event) => {
    this.setState({nome: event.target.value})
  }
  inputArtista = (event) => {
  this.setState({artista: event.target.value})
  }
  inputUrl = (event) => {
  this.setState({url: event.target.value})
  }

  render(){
    
    return (
      <CardMusica>
          <h1>Adicionar Músicas</h1>
          <input
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.inputNome}
                />
                <br/>
                <input
                    placeholder={"Artista"}
                    value={this.state.artista}
                    onChange={this.inputArtista}
                />
                <br/>
                 <input
                    placeholder={"Url"}
                    value={this.state.url}
                    onChange={this.inputUrl}
                />
                <br/>
          <div>
          <button onClick={this.addTrackToPlaylist}>Cadastrar</button>
          <br/>
          <button onClick={this.props.nextVisualiza}>Volta p/ Lista</button>
          </div>
      </CardMusica>
    );
  }
  
}

export default AddPlayList;
