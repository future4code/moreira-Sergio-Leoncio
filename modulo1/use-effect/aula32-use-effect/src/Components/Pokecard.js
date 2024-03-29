import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeCard(props) {
    
    const [pokemon, setPokemon] = useState({})
        

    const pegaPokemon = (pokeName) => {
        axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // console.log(response.data)
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    };

    useEffect(() =>{
        pegaPokemon(props.pokemon)
    }, [props.pokemon])      

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  
}
export default PokeCard;