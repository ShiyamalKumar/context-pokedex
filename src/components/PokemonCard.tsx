import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { usePokemonContext } from '../context/PokemonContext';
import '../PokemonCard.css';
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

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
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
