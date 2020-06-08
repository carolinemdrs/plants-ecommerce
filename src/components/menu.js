import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const MenuStyled = styled.div `
    display:flex;
    justify-content:center;

    @media (max-width:667px) and (min-width:375px)  { 
        display: flex;
        justify-content:center;
        flex-direction:column;
      }
    
`


const Menu = (props) => {
    return (
        <MenuStyled>
            <Button onClick={() => {props.changeCategory("Todas") }}>Todos produtos</Button>
            <Button onClick={() => {props.changeCategory("Horta") }}>Horta</Button>
            <Button onClick={() => {props.changeCategory("Jardim") }}>Jardim</Button>
            <Button onClick={() => {props.changeCategory("Ferramentas") }}>Ferramentas</Button>
            <Button onClick={() => {props.changeCategory("Adubo") }}>Adubo</Button>
        </MenuStyled>
    )
}

export default Menu