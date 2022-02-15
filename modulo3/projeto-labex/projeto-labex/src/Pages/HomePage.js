import React from "react";
import { useNavigate } from "react-router-dom";
import Viagem from "../img/viagem.jpg";

const HomePage = () => {
    const navigate = useNavigate()

    const nextViagens = () => {
        navigate("/List")
    }

    const nextAdmin = () => {
        navigate("/Login")
    }

  return (
    <div>
      <p>HomePage </p>
      <iframe
        src={Viagem}
        width="480"
        height="360"
        frameBorder="0"
        // para resolver o warning, coloquei esse title aqui
        title="Gif de Viagem"
      ></iframe>
        <p>
        <button onClick={nextViagens}>Viagens</button>
        <button onClick={nextAdmin}>Área de Admin</button>
        </p>
    </div>
  );
};

export default HomePage;
