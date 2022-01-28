import React from "react";
import axios from "axios";
import {Visualiza_URL, headers } from "./url";
import styled from "styled-components";

const ListaContainer = styled.div`
    font-size: 30px;     
    color: #00a1ff;   
    margin: 10px;
    :hover{
        cursor: pointer;
    }
`

class VisualizarPlayList extends React.Component {
    state = {
        playList: []
    }

    componentDidMount(){
        this.chamarList()
    }

    chamarList = () => {
        axios.get(`${Visualiza_URL}`, headers)
        .then((res) => this.setState({playList: res.data.result.list}))
        .catch((err) => console.log(err.response))
    }

  render() {
      //console.log(this.state.playList)
      const novaPlayList = this.state.playList.map((play) =>{
        return (
         <ListaContainer 
            key={play.id} 
            onClick={() => this.props.nextDetalhe(play.id) }>
            <u>{play.name}</u>
         </ListaContainer>
        )
      })

    return (
      <div>
          <h3>Escolha sua PlayList</h3>          
          {novaPlayList}
      </div>
    );
  }
  
}

export default VisualizarPlayList;
