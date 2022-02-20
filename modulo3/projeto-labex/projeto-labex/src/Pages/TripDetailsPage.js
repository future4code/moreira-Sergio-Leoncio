import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useState } from "react";
import * as G from "../components/styleGeral";

const TripDetailsPage = () => {
  useProtectedPage();
  const [data, setData] = useState({});  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/darvas/trip/:id`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Deu erro:", error.response);
      });
  }, []);

  const nextAdmin = () => {
    navigate("/Admin");
  };
  
  return (
    <G.ContainerLabex>
      <h1>Labex</h1>
      <br />
      <h1>Viagens</h1>
      
      <p>
        <G.Botoes onClick={nextAdmin}>Voltar</G.Botoes>
      </p>
      <h2>Canditatos Pendentes</h2>
      <h2>Canditados Aprovados</h2>
      
    </G.ContainerLabex>
  );
};

export default TripDetailsPage;
