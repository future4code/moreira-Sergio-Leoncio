import axios from "axios";
import React from "react";
import {remove_URL, headers} from "./url";
import styled from "styled-components";


const Container = styled.div`
    p {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
        width: 300px;
        background-color: lightblue;
        display: flex;
        justify-content: space-between;
        align-items: center;
    /* &:hover {
        cursor: pointer;
        background-color: lightblue;
    }   */
    }
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

class DetalhePlayList extends React.Component {
    state={
        listDetalhe: []
    }

    componentDidMount(){
        this.getPlaylistTracks()
    }

getPlaylistTracks = () =>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, headers)
        .then((res) => {this.setState({listDetalhe: res.data.result.tracks })
    
    })
        
        .catch((err) => alert("Ocorreu um erro, tente novamente"))
    }

removeTrackFromPlaylist = (id) =>{
        axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId", headers)
        .then((res) => {
            alert("Música deletada com sucesso!")
            this.getPlaylistTracks()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")
        })
    }


  render(){
     // console.log(this.state)
     const listaDeMusica = this.state.listDetalhe.map((music)=>{
         return (
             <Container key={music.id}>
                 <h4>Nome do Artista:</h4>
                 <p>{music.artist}</p>
                 <h4>Nome da Música:</h4>
                 <p>{music.name}
                    <button onClick={() => this.removeTrackFromPlaylist(music.id)}>x</button>
                 </p>
                 <br/>
                 <audio src={music.url}controls/>
                 <br/>
                 <button onClick={this.props.nextAdiciona}>Inserir Música</button>
                 <br/>
                 <button onClick={this.props.nextVisualiza}>Voltar p/ Lista</button>
             </Container>
         )
     })
    
    return (
      <div>
     
          {listaDeMusica}

      </div>
    );
  }
  
}

export default DetalhePlayList;
