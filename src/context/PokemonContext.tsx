import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { fetchPokemonDetails } from '../utils/api';
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

interface PokemonContextType {
  pokemonList: Pokemon[];
  pokemonDetails: Pokemon[];
  getData:() => void
}

const getPokemonData = (
  link: string,
  setPokemonList: React.Dispatch<React.SetStateAction<Pokemon[]>>,
  setPokemonDetails: React.Dispatch<React.SetStateAction<Pokemon[]>>
) => {
  axios.get(link)
    .then((response) => {
      console.log("response",response.data.results)
      setPokemonList(response.data.results);
      response.data.results.forEach((item: { url: string }) => {
        axios.get<Pokemon>(item.url)
          .then((data) => {
            setPokemonDetails((prev) => [...prev, data.data]);
          })
          .catch((err) => console.log("Unable to fetch POKE Details"));
      });
    })
    .catch((error) => console.error(error));
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context; 
};

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon[]>([]);
  const getData=()=>{
    getPokemonData('https://pokeapi.co/api/v2/pokemon/', setPokemonList, setPokemonDetails);
 }
  // useEffect(() => {
  //   getPokemonData('https://pokeapi.co/api/v2/pokemon/', setPokemonList, setPokemonDetails);
  // }, []);

  const value: PokemonContextType = {
    pokemonList,
    pokemonDetails,
    getData
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
};