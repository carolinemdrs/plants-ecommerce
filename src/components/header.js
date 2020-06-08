import React from 'react';
import plant from '../imgs/plant.svg';
import styled from 'styled-components';
import ferramenta from '../imgs/ferramenta.svg';

const Logo = styled.img `
    width: 7%;

    @media (max-width:667px) and (min-width:0px)  { 
        display: none;
      }
`

const Img = styled.img `
    width: 7%;

    @media (max-width:667px) and (min-width:0px)  { 
        width:20%;
      }
`
const HeaderStyled = styled.div `
    display:flex;
    justify-content: space-between;
    background-color:#fff9c4;
    color: #00e676;
    font-weight:900;
    font-size:28px;
    padding:5px;

    @media (max-width:667px) and (min-width:0px)  { 
        font-weight:500;
      }
`

const Header = () => {
    return (
        <HeaderStyled>        
            <Logo src={plant} alt="logo" />
            <p>PlantCommerce</p>
            <Img src={ferramenta} />
        </HeaderStyled>
    ) 
}

export default Header
