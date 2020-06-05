import React from 'react';
import MainCard from './mainCard';
import styled from 'styled-components';
import { connect } from "react-redux";


const MainContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding:5%;
    justify-items: center;
`

const CardContainer = (props) => {
    return (
        <MainContainer>
            {props.cardList.map(cardList => {
                return <MainCard
                            cardName={cardList.cardName} 
                            cardImage={cardList.cardImage}
                            cardText={cardList.cardText}
                />    
            })}
        </MainContainer>
    )

}
function mapStateToProps (state) {
    return{
      cardList: state.cardList,
    }
  }
  
  
export default connect (mapStateToProps, null)(CardContainer)


/*
 <MainContainer>
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
        </MainContainer>


*/