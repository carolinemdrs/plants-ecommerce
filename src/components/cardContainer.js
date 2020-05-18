import React from 'react';
import Card from './mainCard';
import styled from 'styled-components'

const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding:5%;
    justify-items: center;
`

const CardContainer = () => {
    return (
        <MainContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </MainContainer>
    )

}

export default CardContainer