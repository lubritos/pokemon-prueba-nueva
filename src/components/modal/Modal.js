import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { getColor, tipos } from '../../shared/utils';
import { minWidth } from '@mui/system';
import { TypeButton } from '../../shared/styles';

const TypeButton2 = styled(Button)`
    display:flex;
    background:${props=>props.sxColor} !important;
    color: #fff !important;
    margin:0.5rem !important;
    
`
const Title = styled.h2`
    margin: .5rem 0;
`
const Debilidades = styled.div`
    display:flex;
    flex-direccion:row;
    flex-wrap:wrap;
    margin:0;
    width:100%;
`
const Habilidades = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap:wrap;
`
const TitleCaracteristica = styled.h2`
    display:flex;
    color:#fff;
    text-transform:capitalize;
    font-size: 1.2rem;
    font-weight: 600;
    padding-top:0.5rem;
    margin: 0;
    justify-content: center;
`
const InfoDescripcion = styled.div`
    padding:0 1rem .5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color:#666;
    display: flex;
    justify-content: center;
    flex-direction:column;
    text-align: center;
`
const NombreModal =  styled.span`
    font-weight: 600;
    font-size:2rem;
`
const NumeroModal = styled.span`
    font-weight:600;
    font-size: 1.2rem;
`
const ImgModal = styled.img`
    max-width: 250px;
    min-width: 160px;
    width:100%;
`

export default function ResponsiveModal({
    handleClose,
    pokeInfo,
}) {
    function handleColor(weakne){
        const color = tipos.filter((tipo)=> tipo.label.toLowerCase() === weakne.toLowerCase())
        console.log(color[0].color);
        return color[0].color
    }

    console.log(pokeInfo)
    return (
        <Dialog
            open={true}
            onClose={handleClose}
            display={'flex'}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
        >
            <DialogContent sx={{ maxWidth: '35rem'}}>
                <Grid
                    item
                    display={'flex'}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <NombreModal>{pokeInfo.name}</NombreModal>
                    <NumeroModal>#{pokeInfo.number}</NumeroModal>
                </Grid>  
                <Grid item 
                    margin={'0 0 1rem 0'}
                    borderRadius="8px"
                    className={getColor(pokeInfo.type)}>
                    <ImgModal src={pokeInfo.ThumbnailImage} alt=''/>
                </Grid>
                <Grid
                    content
                    display={'flex'}
                    direction={{xs:'column', sm:'row', md:'row'}}
                    justifyContent="space-around"
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    alignItems="start"                        
                    sx={{background:"#30a7d7"}}
                    borderRadius="8px"
                    >
                    <Grid
                        item
                        minWidth={130}
                        padding={0}>
                        <TitleCaracteristica>Altura</TitleCaracteristica>
                        <InfoDescripcion>{pokeInfo.info.height} Mt</InfoDescripcion>
                    </Grid>
                    <Grid
                        item
                        minWidth={130}
                        padding={0}>
                        <TitleCaracteristica>Peso</TitleCaracteristica>
                        <InfoDescripcion>{pokeInfo.info.weight} Kg</InfoDescripcion>
                    </Grid>
                    <Grid
                        item 
                        minWidth={130}
                        padding={0}>
                        <TitleCaracteristica>Habilidades</TitleCaracteristica>
                        <Habilidades>
                            {pokeInfo.info.abilities.map(
                                (abiliti) => <InfoDescripcion>{abiliti}</InfoDescripcion>)
                            }
                        </Habilidades>
                    </Grid>
                </Grid>
                <Grid 
                    content
                    display={'flex'}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"                    
                    >
                    <Grid 
                        item
                        wrap="wrap">
                        <Title>Debilidades</Title>
                        <Debilidades>
                            {pokeInfo.info.weakness.map(
                                (weakne) => 
                                <Grid item> 
                                    <TypeButton2
                                    variant="container"
                                    sxColor={handleColor(weakne)}
                                    sx={{width: '5rem'}}
                                    >
                                        {weakne}
                                    </TypeButton2>
                                </Grid>
                            )}
                        </Debilidades>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{margin: '.5rem 1rem'}}>
                <TypeButton
                    variant="outlined"
                    sxColor="#f10e0e" 
                    onClick={handleClose}
                    autoFocus>
                    Cerrar
                </TypeButton>
            </DialogActions>
        </Dialog>
    );
}
