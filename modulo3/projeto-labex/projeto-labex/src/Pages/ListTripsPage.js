import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";


const ListTripsPage = () => {
  const navigate = useNavigate()
  
    const nextHomePage = () => {
        navigate("/")
    }
    const nextInscreve = () => {
        navigate("/AppForm")
    }

  const tripsList = useRequestData(`${BASE_URL}/:sergio/trips`, {})
    const tripsComponents = 
      tripsList.trips &&
      tripsList.trips.map((trip) =>{
        return <ol key={trip.name}>{trip.name}</ol>   
      })    

  return (
    <div>
      <p>
        <button onClick={nextHomePage}>Voltar</button>
        <button onClick={nextInscreve}>Inscrever</button>
      </p>
      <h1>Lista de viagens</h1>      
      <ol>{tripsComponents}</ol>
    </div>
  );
};

export default ListTripsPage;
