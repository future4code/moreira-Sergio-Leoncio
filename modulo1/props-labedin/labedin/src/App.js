import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagensSH from './ImagensSH/Hunsk.jpg';
import ImagensSH2 from './ImagensSH/cisco.png';
import ImagensSH3 from './ImagensSH/email.png';
import ImagensSH4 from './ImagensSH/endereço.jpg';
import ImagensSH5 from './ImagensSH/hardware.jpg';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {ImagensSH} 
          nome="PERFIL" 
          descricao="Oi, eu sou o Sergio. Sou o aluno da Labenu. Estou adorando este mundo de dev ou seja da programação, está muito prazeroso, apesar de estar quebrando a cabeça."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
        <CardPequeno 
          imagem={ImagensSH3}
          nome="EMAIL:"
          descricao="sergio@gmail.com"
        />
        <CardPequeno 
          imagem={ImagensSH4}
          nome="END.::"
          descricao="SHA BRASILIA - BRASIL"
        />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagensSH2} 
          nome="CISCO" 
          descricao="Certificação CCNA 200-301" 
        />
  
        
        <CardGrande 
          imagem={ImagensSH5} 
          nome="HARDWARE" 
          descricao="Descobrindo defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
