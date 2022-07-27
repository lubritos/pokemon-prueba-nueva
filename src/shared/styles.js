import { Button } from "@mui/material";
import styled from "styled-components";
export const TypeButton = styled(Button)`
    border: ${({sxColor}) => sxColor} solid 1px!important;
    color: ${({sxColor}) => sxColor}!important;

    &:hover {
        background: ${({sxColor}) => sxColor}!important;
        color: #fff!important;
    }
`

export const Listado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 20rem;
    max-height: 20rem;
    margin: 1rem 1rem 1rem 0;
    position: absolute;
    right: 0.1rem;
    background:white;
    color:#666;
    padding:1rem;
    overflow-y: auto;
    z-index:999;
    border-radius: 3%;
    box-shadow: -13px 18px 13px -13px rgba(0,0,0,0.42);
`;
export const Name = styled.div`
    font-size:1.3rem;
`
export const Items = styled.div`
    display:flex;
    flex-direction:row;
    height: 4rem;
    margin: 0.5rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.5rem;
    padding: 0.5rem;

`
export const ImgSearch = styled.img`
    height:5rem;
`