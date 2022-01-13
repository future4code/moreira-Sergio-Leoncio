import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Botao = styled.main`
  background-color: lavender;
  margin: 5px auto;
  padding: 10px;
  display: flexbox;
  justify-content: center;  
  width: 200px;  
`

class App extends React.Component {

  state={
        listaPost: [ {           
           nomeUsuario:'paulinha',
            fotoUsuario:'https://picsum.photos/50/50',
            fotoPost:'https://picsum.photos/200/150',
  },
  
     {     
            nomeUsuario:'augusto',
            fotoUsuario:'https://picsum.photos/51/51',
            fotoPost:'https://picsum.photos/200/160',
         },
  
          {
            nomeUsuario:'claudia',
            fotoUsuario:'https://picsum.photos/52/52',
            fotoPost:'https://picsum.photos/200/170',
          }]
  };
  
  nomeInput = (event)=>
    this.setState({
      inputNome: event.target.value
  });

  fotoInput=(event)=>
  this.setState({
    inputFoto: event.target.value
  });

  postFotoInput=(event)=>
  this.setState({
    inputPostFoto: event.target.value
  });

  addClick=()=>{
    const novaListaPost = [
      ...this.state.listaPost,
    {nomeUsuario: this.state.inputNome, 
      fotoUsuario:this.state.inputFoto, 
      fotoPost:this.state.inputPostFoto}
    ];
  this.setState({
    listaPost: novaListaPost,
    inputNome: "",
    inputFoto:"",
    inputPostFoto:""
  });

  };

  render() {

    const listaDePost = this.state.listaPost.map((post, index)=>{
      return <Post key={index}
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
    />
      
    });
    return (      
      <MainContainer>
        <Botao>
        <input
          placeholder="Nome"
          value={this.state.inputNome}
          onchange={this.nomeInput}
      />
      <input
          placeholder="Sua Foto"
          value={this.state.inputFoto}
          onchange={this.fotoInput}
      />
       <input
          placeholder="Foto"
          value={this.state.inputPostFoto}
          onchange={this.postFotoInput}
      />

      <button onClick={this.click}>Adicionar</button>
      </Botao>

            {listaDePost}    
      </MainContainer>
    );
    
  };
};

export default App;
