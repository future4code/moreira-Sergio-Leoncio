import React from "react";
import { useNavigate } from "react-router-dom";


const ListTripsPage = () => {
  const navigate = useNavigate()

    const nextHomePage = () => {
        navigate("/")
    }

    const nextInscreve = () => {
        navigate("/AppForm")
    }

  return (
    <div>
      <p>
        <button onClick={nextHomePage}>Voltar</button>
        <button onClick={nextInscreve}>Inscrever</button>
      </p>
      <h1>Lista de viagens</h1>
    </div>
  );
};

export default ListTripsPage;
