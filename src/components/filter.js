import React from 'react';
import search from '../imgs/search.svg';
import styled from 'styled-components';

const ImgStyled = styled.img `
    width: 30px;
    height:4vh;
    margin:5px;
`
const Main = styled.div `
   display:flex;
   height:5vh;
`

const InputStyled = styled.input `
  border-radius: 8%;
  margin-top:4px;
   
`


const FilterbyName = () => {
    return (
        <Main>
            <ImgStyled src={search} />
            <InputStyled></InputStyled>
        </Main>
    
    )
}

export default FilterbyName