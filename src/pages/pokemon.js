import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import CardPokemon from "../components/card/Card";
import Navbar from "../components/navbar";
import apiPokemon from "../services/pokemons";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pagina , setPagina] = useState(1);
  async function getPokemon() {
    const response = await apiPokemon.get(`?offset=${pagina*20}&limit=20`)
    const poks = response.data.results;
    console.log('poks', poks);
    for(let pokemon of poks) {
      const formPoke = await apiPokemon.get(`-form/${pokemon.name}`)
      if (pokemons.some((poke) => poke.name.includes(formPoke.data.name))) return;
      setPokemons(oldItems => ([...oldItems, formPoke.data]));
    }
  }

  const handleChange = (event, value) => {
    console.log('page', value)
    setPagina(value);
    setPokemons([]);
  };

  useEffect(() => {
    getPokemon();
  }, [pagina]);

  return (
    <div>
      <Navbar/>
      <h1>Lista de pokemon</h1>
      <Grid 
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center">
        {pokemons.map((pokemon) => (
          <Grid item>
            <CardPokemon key={pokemon.name} {...pokemon} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent={'center'}>
        <Grid item>
          <Pagination
            count={10}
            variant="outlined"
            color="secondary"
            onChange={handleChange}/>
        </Grid>
      </Grid>
    </div>
  );
};
export default Pokemon;
