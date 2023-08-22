import React, { useContext } from 'react';
import PokemonCard from './PokemonCard';
import '../PokemonList.css';
import { usePokemonContext } from "../context/PokemonContext"

const PokemonList = () => {
  const {
    pokemonList,
    pokemonDetails,
  } = usePokemonContext();

  return (
    <div className="pokemon-list">
      {pokemonDetails.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
