const { default: axios } = require("axios");

const configAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  responseType: "json"
});

export default configAxios;
