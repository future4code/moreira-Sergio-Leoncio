import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./Components/Pokecard.js";

function App() {
  const [pokelist, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const changePokeName = (event) => {
        setPokeName(event.target.value);
      };

  const componentDidMount = () => {    
        axios
          .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
          .then(response => { 
            // console.log(response.data)                  
            setPokeList(response.data.results);
          })
          .catch(err => {
            console.log(err);
          });
      };
    
  useEffect(()=>{
      componentDidMount()
  }, []);
  
    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  
}
export default App;