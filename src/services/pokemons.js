import configAxios, { configAxios2 } from ".";

const apiPokemon = {
  get: (url) => configAxios.get(`pokemon${url}`)
};

export const apiPokemonsKalos = {
  get: () => configAxios2.get('pokedex/kalos')
};

export default apiPokemon;
