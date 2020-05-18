import React from 'react';
import plant from '../imgs/plant.svg';
import styled from 'styled-components';
import ferramenta from '../imgs/ferramenta.svg';

const Logo = styled.img `
    width: 7%;
`

const Img = styled.img `
    width: 7%;
`
const HeaderStyled = styled.div `
    display:flex;
    justify-content: space-between;
    background-color:#fff9c4;
    color: #00e676;
    font-weight:900;
    font-size:28px;
    padding:5px;
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
