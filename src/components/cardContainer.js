import React from 'react';
import MainCard from './mainCard';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding:5%;
    justify-items: center;

    @media (max-width:667px) and (min-width:0px)  { 
        display: flex;
        justify-content:center;
        flex-direction:column;
      }
`

const CardContainer = (props) => {
const listaFiltrada = props.listaDePlantas.filter((listaDePlantas)=>{
        if(listaDePlantas.cardName.includes(props.cardName)){
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
    listaDePlantas:PropTypes.func.isRequired,
    filterByName:PropTypes.func.isRequired,
};

  
export default CardContainer
