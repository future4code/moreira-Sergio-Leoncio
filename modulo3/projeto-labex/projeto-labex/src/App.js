import React from "react";
import Rotas from "./routes/Router";
import useRequestData from "./hooks/useRequestData";
import { BASE_URL } from "./constants/url";

const  App = () => {
    const tripsList = useRequestData(`${BASE_URL}/:darvas/trips`, {})
    const tripsComponents = 
      tripsList.trips &&
      tripsList.trips.map((trip) =>{
        return <ol key={trip.id}>
          <p><strong>Nome:</strong> {trip.name}</p>
          <p><strong>Descrição:</strong> {trip.description}</p>
          <p><strong>Planeta:</strong> {trip.planet}</p>
          <p><strong>Duração:</strong> {trip.durationInDays}</p>
          <p><strong>Data:</strong> {trip.date}</p>         
        </ol>   
      })    

 return <Rotas tripsList={tripsList}/>
    
}
export default App;
