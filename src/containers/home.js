import React from 'react';
import CardContainer from '../components/cardContainer';
import Header from '../components/header';
import Menu from '../components/menu';
import FilterbyName from '../components/filter';
import styled from 'styled-components';

const Toolbar = styled.div `
    display: flex;
    justify-content:center;
`


class Home extends React.Component {
    render() {
        return(
            <div>
                 <Header />
                <Toolbar>
                    <Menu />
                    <FilterbyName />
                </Toolbar>
                <CardContainer />
           
            </div>
        )
    }
}

export default Home;
