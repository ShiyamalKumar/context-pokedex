import axios from 'axios';

export const fetchPokemonDetails = async (url:string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        // console.error(`Unable to fetch Pokémon details: ${error.message}`);
        throw error;
    }
};
