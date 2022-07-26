const { default: axios } = require("axios");

const configAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  responseType: "json"
});
export const configAxios2 = axios.create({
  baseURL: "https://www.pokemon.com/us/api/",
  responseType: "json"
});


export default configAxios;
