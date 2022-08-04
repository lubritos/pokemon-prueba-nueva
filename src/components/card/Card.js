import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import grey from '@mui/material/colors/grey';
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getColor } from "../../shared/utils";


const ImgGroup = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`
const BtnType = styled.div`
  display: flex;
`

const IconosCard = styled.div`
  display:flex;
`

const CardPokemon = ({
  handleFav,
  fav,
  name,
  number,
  type,
  ThumbnailImage,
  ...rest
}) => {


  return (
    <Card 
      className={getColor(type[0])}
      sx={{ display: 'flex', width: 345, height: 225, borderRadius: '2rem' }}
      data-type={type}
      >
      <CardContent sx={{ width: 190 }} >
        <Typography gutterBottom variant="h4" component="div">
          #{number}
        </Typography>
        <Typography gutterBottom variant="h5" color={'#fff'} component="div">
          {name}
        </Typography>
        <BtnType >
          {type.map(
            (type) =>
            <Button 
              variant="contained"
              className='colorBtn btn'>
              {type}
            </Button>
          )}

        </BtnType>
      </CardContent>
      <ImgGroup>
        <IconosCard>
            <IconButton>
              <img src={`${process.env.PUBLIC_URL}/view.png`} 
              className = "m-05 c-white" 
              width={30} 
              onClick={()=>rest.openModal({
                number: number,
                name: name,
                ThumbnailImage: ThumbnailImage,
                type: type[0],
                info: rest
              })}
              alt=""/>
            </IconButton>
            <IconButton sx={{ color: grey[50] }} className = "m-05" onClick={()=> handleFav({
              number: number,
              name: name,
              ThumbnailImage: ThumbnailImage
            })}>
              {fav.length ?<FavoriteIcon/>  : <FavoriteBorderIcon/>}
            </IconButton>
            
        </IconosCard>
        <img src={ThumbnailImage} alt={name} height='150' />
      </ImgGroup>
    </Card>
  );
};
export default CardPokemon;
