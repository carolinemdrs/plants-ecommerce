import React from 'react';
import styled from 'styled-components';
import insta from '../imgs/insta.svg';
import whats from '../imgs/whats.svg';
import yt from '../imgs/yt.svg';


const FooterStyled = styled.div `
    background-color:#a1887f;
    display:flex;
    justify-content:center;
    padding:5px;

    @media (max-width:667px) and (min-width:0px)  { 
        background-color:#a1887f;
        display:flex;
        justify-content:center;
        flex-direction:column;
        padding:5px;
      }
`

const Imgs = styled.img `
    background-color:#dcedc8;
    margin:2px;
    border-radius:20%;
    width:4%;
`

const Footer = () => {
    return (
        <FooterStyled>        
            <Imgs src={insta} />
            <Imgs src={whats} />
            <Imgs src={yt} />
        </FooterStyled>
    ) 
}

export default Footer