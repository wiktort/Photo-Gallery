import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Card from '../../Card';
import withFetch from '../../HOC/withFetch';

import settings from '../global';

import styled from 'styled-components';


const StyledList = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2vh;

    border-top: 1px solid ${(props) => props.theme.colors.primary};
`;
const StyledCardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

class GridList extends Component{

    state={
        loading: true
    }

    componentDidMount(){
        this.setState({loading: false})
    }

    createCards(){
        const { data } = this.props;
        const quantity = settings.sectionsListsSettings.cardsToShow;
        const images = data.map(item => {
            return <Card key={item.id} url={item.urls.small} alt={item.alt_description} id={item.id}/>
        });

        return images.slice(0, quantity);
    }

    render(){
        const { loading } = this.state;
        console.log(this.props)
        const showCards = loading 
            ? null
            : this.createCards();

        return (
            <StyledList>
                <h2>{this.props.other.title}</h2>
                <StyledCardsWrapper>
                    {showCards}
                </StyledCardsWrapper>
            </StyledList>
        )
    }
};

export default withRouter(
    withFetch(
        GridList
    )
);