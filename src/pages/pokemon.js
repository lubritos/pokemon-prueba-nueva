import { useEffect, useState } from "react";
import CardPokemon from "../components/card/Card";
import apiPokemon from "../services/pokemons";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  function getPokemon() {
    apiPokemon.get("?offset=20&limit=20").then((resp) => {
      const poks = resp.data.results;
      console.log(poks);
      poks.map((pokemon) => {
        return apiPokemon
          .get(`-form/${pokemon.name}`)
          .then((resp) => setPokemons([...pokemons, resp.data]));
      });
    });
  }
  useEffect(() => {
    getPokemon();
    console.log('pokemons', pokemons)
  });
  return (
    <div>
      <h1>Lista de pokemon</h1>
      <CardPokemon />
    </div>
  );
};
export default Pokemon;
