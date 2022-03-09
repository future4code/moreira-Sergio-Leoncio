import React from "react";
import { useNavigate } from "react-router-dom";
import lixeira from "../img/lixeira.png";
import { useState } from "react";
import { useEffect } from "react";
import * as G from "../components/styleGeral";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../constants/url";


const AdminHomePage = (props) => {
  useProtectedPage();
  const navigate = useNavigate();
  const [id, setId] = useState("");
   

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
  
  const deleteTrip =()=>{
        
    const token = localStorage.getItem("token")
    const headers = {headers:{
      'Content-Type': 'application/json',
      auth: token}}

    axios.delete(`${BASE_URL}/darvas/trips/${id}`,
    headers)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error.response)
    })    
  }

  const viagemList =
    props.tripsList.trips &&
    props.tripsList.trips.map((item) => {
      return (
        <G.ContainerCard>
          <G.CardAdmin onClick={nextDetails} value={item.id}>
            <strong>{item.name}</strong>
          </G.CardAdmin>
          <br/>
          <G.ImgLixeira>
            <img src={lixeira} />
          </G.ImgLixeira>
          <br/>
        </G.ContainerCard>
      );      
    });

    const idOnchange = (event) => {
      setId(event.target.value);
      console.log(id);
    }; 
           
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
