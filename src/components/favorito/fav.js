import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { ImgSearch, Items, Listado, Name } from '../../shared/styles';



const FavSx = styled(IconButton)`
    margi:0.5rem;
    color:white !important;

`
const Fav = ({favoritos})=>{
    const [show, setShow] = useState (false);

    return (
        <div>
            <FavSx onClick={()=> setShow(!show)}>
                {favoritos.length ? <FavoriteIcon /> : <FavoriteBorder/>}
            </FavSx>
            {show && <Listado>
                {favoritos.length ? 
                    favoritos.map((pokemon) => (
                    <Items>
                        <Name>{pokemon.name}</Name>
                        <ImgSearch src={pokemon.ThumbnailImage} />
                    </Items>
                    ))
                    : "No hay favoritos!"
                }
                
            </Listado>}
            

        </div>
    )
}
export default Fav;