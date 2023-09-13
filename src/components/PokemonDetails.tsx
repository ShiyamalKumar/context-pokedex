import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonContext } from '../context/PokemonContext';
import '../PokemonDetails.css';
import { padNumber } from '../utils/helper';

interface Ability {
  ability: {
    name: string;
  };
}

interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface Pokemon {
  id: string;
  name: string;
  abilities: Ability[];
  stats: Stat[];
  height: number;
  weight: number;
}

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { pokemonDetails } = usePokemonContext();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
console.log("value of poke",pokemonDetails)
  useEffect(() => {
    if(pokemonDetails)
   {
    console.log("pokemonDetails 1",pokemonDetails)
     const matchingPokemon = pokemonDetails.find((item) =>  String(item.id)===(id));
    if (matchingPokemon !== undefined) {
      setSelectedPokemon(matchingPokemon);
    }}
    else{
      console.log("pokemonDetails",pokemonDetails)
    }
// console.log("matchingPokemon",matchingPokemon,pokemonDetails,id)

  }, [id, pokemonDetails]);
  if (!selectedPokemon || pokemonDetails.length === 0) {
    return <div>Loading...</div>; // Consider showing a loading indicator.
  }

  return (
    <div className="pokemon-details">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padNumber(
          parseInt(id!, 10),
          3
        )}.png`}
        alt={selectedPokemon.name}
      />
      <div className="details-card">
        <h2>{selectedPokemon.name}</h2>
        <div className="abilities">
          <h3>Abilities</h3>
          <ul>
            {selectedPokemon.abilities.map((ability) => (
              <li key={ability?.ability?.name}>{ability?.ability?.name}</li>
            ))}
          </ul>
        </div>
        <div className="stats">
          <h3>Base Stats</h3>
          <ul>
            {selectedPokemon.stats.map((stat) => (
              <li key={stat?.stat?.name}>
                {stat?.stat?.name}: {stat?.base_stat}
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
