import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import '../PokemonList.css';
import { usePokemonContext } from "../context/PokemonContext"


const PokemonList: React.FC = () => {
  const {
    pokemonDetails,
    getData
  } = usePokemonContext();
console.log("pokemonDetails",pokemonDetails)
  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="pokemon-list">
      {pokemonDetails.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
