import configAxios from ".";

const apiPokemon = {
  get: (url) => configAxios.get(`pokemon${url}`)
};

export default apiPokemon;
