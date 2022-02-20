import React from "react";
import { useNavigate } from "react-router-dom";
import * as G from "../components/styleGeral";

const ListTripsPage = (props) => {
  const navigate = useNavigate();

  const nextHomePage = () => {
    navigate("/");
  };
  const nextInscreve = () => {
    navigate("/AppForm");
  };

  const viagemList =
    props.tripsList.trips &&
    props.tripsList.trips.map((item) => {
      return (
        <G.ContainerCard>
        <G.CardList value={item.id}>         
          <p><strong>Nome:</strong> {item.name}</p>
          <p><strong>Descrição:</strong> {item.description}</p>
          <p><strong>Planeta:</strong> {item.planet}</p>
          <p><strong>Duração:</strong> {item.durationInDays}</p>
          <p><strong>Data:</strong> {item.date}</p>          
        </G.CardList>
        </G.ContainerCard>
      );
    });

  return (
    <G.ContainerLabex>
      <h1>Labex</h1>
      <br />
      <p>
        <G.Botoes onClick={nextHomePage}>Voltar</G.Botoes>
        <G.Botoes onClick={nextInscreve}>Inscrever</G.Botoes>
      </p>
      <h1>Lista de viagens</h1>
      <br />
      <ol>{viagemList}</ol>
      
    </G.ContainerLabex>
  );
};

export default ListTripsPage;
