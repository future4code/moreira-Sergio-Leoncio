import React from "react";
import { useNavigate } from "react-router-dom";
import Viagem from "../img/viagem.jpg";
import * as G from "../components/styleGeral";

const HomePage = () => {
  const navigate = useNavigate();

  const nextViagens = () => {
    navigate("/List");
  };

  const nextAdmin = () => {
    navigate("/Login");
  };

  return (
    <G.ContainerLabex>
      <G.ContainerHome>
      <h1>Labex</h1>      
        <G.ImgHome src={Viagem} />     
      <p>
        <G.Botoes onClick={nextViagens}>Viagens</G.Botoes>
        <G.Botoes onClick={nextAdmin}>Área de Admin</G.Botoes>
      </p>
      </G.ContainerHome>
    </G.ContainerLabex>
  );
};

export default HomePage;
