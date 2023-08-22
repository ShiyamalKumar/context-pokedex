import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const getPokemonData = (link, setPokemonList, setPokemonDetails ) => {
  axios.get(link)
  .then(response => {
      setPokemonList(response.data.results);
      
      //getting data for each item
      response.data.results.map( item => {
        axios.get(item.url)
        .then((data) => {
            setPokemonDetails( prev => [ ...prev, data.data])
        })
        .catch((err)=>console.log("unable to fetch POKE Details"))
      })
      
  })
  .catch(error =>console.error(error));
}

const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
}; 

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    getPokemonData('https://pokeapi.co/api/v2/pokemon/', setPokemonList, setPokemonDetails);
  }, []);

  const value = {
    pokemonList,
    pokemonDetails,
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
};
