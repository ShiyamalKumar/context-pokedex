import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { usePokemonContext } from '../context/PokemonContext';
import '../PokemonCard.css';
import { padNumber } from '../utils/helper';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate(); 
  // const { setSelectedPokemon } = usePokemonContext();

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`); 
  };
  return (
    <div className="pokemon-card" onClick={handleClick}>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padNumber(pokemon.id, 3)}.png`} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
