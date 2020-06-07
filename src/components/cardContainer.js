import React from 'react';
import MainCard from './mainCard';
import styled from 'styled-components';
import { connect } from "react-redux";
import PropTypes from 'prop-types'


const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding:5%;
    justify-items: center;
`

const CardContainer = (props) => {
const listaFiltrada = props.listaDePlantas.filter((listaDePlantas)=>{
        if(listaDePlantas.cardName.includes(props.name)){
            return true
        }else
            return false
    }
)
    return (
        <MainContainer>
            {listaFiltrada.map(cardList => {
                return <MainCard
                            cardName={cardList.cardName} 
                            cardImage={cardList.cardImage}
                            cardText={cardList.cardText}
                />    
            })}
        </MainContainer>
    )

}

CardContainer.propTypes = {
	listaDePlantas:PropTypes.func.isRequired
};

  
export default CardContainer
