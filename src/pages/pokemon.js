import { Button, Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CardPokemon from "../components/card/Card";
import ResponsiveModal from "../components/modal/Modal";
import Navbar from "../components/navbar";
import Search from "../components/search";
import apiPokemon, { apiPokemonsKalos } from "../services/pokemons";
import { TypeButton } from "../shared/styles";
import { tipos } from "../shared/utils";

const Title = styled.h1`
  display:flex;
  font-size:3rem;
  justifi-content:start;
  margin:2rem;
`


let existPokemon = [];
const Pokemon = () => {
  const storePokes = localStorage.getItem('pokePaginado');
  const [open, setOpen] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokePaginado, setPoke] = useState(storePokes ? JSON.parse(storePokes) : []);
  const [pagina , setPagina] = useState(1);
  const [pokeInfo , setPokeInfo] = useState({});
  const [favoritos, setFavoritos] = useState([]);
  const [busqueda, setBusqueda] = useState([]);

  async function getPokemon() {
    const response = await apiPokemonsKalos.get();
    return await cleanDuplicate(response.data);
  }
  function cleanDuplicate(pokemons) {
    let pokes2 = [];
    for(let poke of pokemons) {
      if (!existPokemon.some((po) => po === poke.name)) {
        pokes2.push(poke)
        existPokemon.push(poke.name);
      }
    }
    existPokemon = [];
    return pokes2;
  }

  async function filtroPokemon(tipos) {
    let pokeFilter;
    if (tipos !== 'todos' ) {
      pokeFilter = pokemons.filter((genero)=> genero.type.find((tipo)=> tipo===tipos))
    } else {
      pokeFilter = pokemons;
    }
    
    const itemsPaginados = await pagination(pokeFilter);
    setPoke(itemsPaginados);
  }

  function pagination(poks) {
    let pokes = [];
    let tempPoke = [];
    let count = 1; 
    for(let pokemon of poks) {
      if (!existPokemon.some((poke) => poke === pokemon.name)) {
        if (count <= 20){
          tempPoke.push(pokemon);
        } else {
          pokes.push(tempPoke);
          tempPoke = [];
          tempPoke.push(pokemon);
          count = 1;
        }
        existPokemon.push(pokemon.name);
        count++;
      }
    }
    existPokemon = [];
    return pokes;
  }

  const handleChange = (event, value) => {
    setPagina(value);
  };

  const handleFav = (value)=>{
    const isExist = favoritos.filter((fav)=>fav.number === value.number)
    if (isExist.length) {
      const remove = favoritos.filter((fav)=>fav.number !== value.number)
      setFavoritos(remove);
    } else {
      setFavoritos([...favoritos,value]);
    }
  }

  function handleSearch(value) {
    if (!value) {
      setBusqueda([]);
      return;
    }
    const pokemonsFill = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    setBusqueda(pokemonsFill);
  }

  useEffect(() => {
    async function initPokemon(){
      const pokes = await getPokemon();
      setPokemons(pokes);
      const itemsPaginados = pagination(pokes);
      setPoke(itemsPaginados);
      localStorage.setItem('pokePaginado', JSON.stringify(itemsPaginados));
    }
    initPokemon();
  }, []);

  useEffect(() => {},[pagina]);


  return (
    <div>
      <Navbar
        favoritos={favoritos}
        search={handleSearch} busqueda={busqueda}
        /> 
      <Title>Pokedex</Title>
      <Grid 
        container
        spacing={{xs: 2, md: 3}}
        className="btnCategoria mb-2"
        >
        {tipos.map(
          (tipo) =>
          <Grid item> 
            <TypeButton
              variant="outlined"
              sxColor={tipo.color}
              onClick={()=>filtroPokemon(tipo.label)}>
                {tipo.label}
            </TypeButton>
          </Grid>
        )}
      </Grid>

      <Grid 
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center">
        {pokePaginado.length && pokePaginado[pagina - 1].map((pokemon) => (
          <Grid item key={pokemon.number}>
            <CardPokemon
              {...pokemon}
              key={pokemon.number}
              handleFav={handleFav}
              fav={favoritos.filter((fav)=>fav.number===pokemon.number)}
              openModal={(val)=> {
                setPokeInfo(val);
                setOpen(true)
              }}
              />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent={'center'}>
        <Grid item>
          <Pagination className="m-2"
            count={pokePaginado.length}
            variant="outlined"
            color="secondary"
            onChange={handleChange}/>
        </Grid>
      </Grid>
      {open && <ResponsiveModal handleClose={()=>setOpen(false)} pokeInfo={pokeInfo} />}
    </div>
  );
};
export default Pokemon;
