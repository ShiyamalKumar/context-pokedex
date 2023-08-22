
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonContext } from '../context/PokemonContext';
import '../PokemonDetails.css';
import {padNumber} from '../utils/helper'

const PokemonDetails = () => {
  const { id } = useParams();
  const {pokemonList, pokemonDetails } = usePokemonContext()
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  console.log(...pokemonDetails.filter(item => item.id == id));

  useEffect(() => {
    setSelectedPokemon(...pokemonDetails.filter(item => item.id == id))
  }, [])

  if (selectedPokemon == null || pokemonDetails == []) {
    return null;
  }

  return (
    <div className="pokemon-details">
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padNumber(id, 3)}.png`} alt={selectedPokemon.name} />
      <div className="details-card">
        <h2>{selectedPokemon.name}</h2>
        <div className="abilities">
          <h3>Abilities</h3>
          <ul>
            {selectedPokemon.abilities.map(ability => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="stats">
          <h3>Base Stats</h3>
          <ul>
            {selectedPokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="details-footer">
          <p>Height: {selectedPokemon.height / 10} m</p>
          <p>Weight: {selectedPokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
