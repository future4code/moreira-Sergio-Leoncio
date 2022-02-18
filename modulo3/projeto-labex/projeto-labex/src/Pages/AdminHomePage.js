import React from "react";
import { useNavigate } from "react-router-dom";
import lixeira from "../img/lixeira.png";
//import { useState } from "react";
import * as G from "../components/styleGeral";


const AdminHomePage = (props) => {
  const navigate = useNavigate();  
  const nextHomePage = () => {
    navigate("/");
  };
  const nextLogin = () => {
    navigate("/Login");
  };
  const nextDetails = () => {
    navigate("/Trip");
  };
  const nextCriar = () => {
    navigate("/Create");
  };
  
  const viagemList =
    props.tripsList.trips &&
    props.tripsList.trips.map((item) => {
      return (
      <div>
        <G.CardAdmin onClick={nextDetails} value={item.id}>
          {item.name}                                            
        </G.CardAdmin> 

        <G.ImgLixeira>                                          
          <img src={lixeira}/>            
        </G.ImgLixeira>              
      </div>
      );
    });

  return (
    <G.ContainerLabex>
      <h1>Labex</h1>
      <br />
      <h1>Painel Administrativo</h1>
      <p>
        <G.Botoes onClick={nextHomePage}>Voltar</G.Botoes>
        <G.Botoes onClick={nextCriar}>Criar Viagem</G.Botoes>
        <G.Botoes onClick={nextLogin}>Logout</G.Botoes>
      </p>
      <ol>{viagemList}</ol>
    </G.ContainerLabex>
  );
};

export default AdminHomePage;
