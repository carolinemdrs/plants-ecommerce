import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const MenuStyled = styled.div `
    display:flex;
    justify-content:center;
    
`


const Menu = () => {
    return (
        <MenuStyled>
            <Button>Horta</Button>
            <Button>Jardim</Button>
            <Button>Ferramentas</Button>
            <Button>Adubo</Button>
        </MenuStyled>
    )
}

export default Menu