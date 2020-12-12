import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Card from '../../Card';
import withFetch from '../../HOC/withFetch';

import settings from '../global';

import styled from 'styled-components';


const StyledList = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2vh;
    padding-top: 1vh;

    border-top: 1px solid ${(props) => props.theme.colors.primary};
`;
const StyledCardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
        & a{
            color: ${(props) => props.theme.colors.text};
        }
`;

const StyledButton = styled.button`
    width: 200px;
    line-height: 30px;
    border-radius: 30px;
    border: none;
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
        a{
            color: ${(props) => props.theme.colors.lightText};
        }
`;

class GridList extends Component{

    state={
        loading: true
    }

    componentDidMount(){
        this.setState({loading: false})
        console.log(this)
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
        const { id } = this.props.other;
        const showCards = loading 
            ? null
            : this.createCards();

        return (
            <StyledList>
                <h2>{this.props.other.title}</h2>
                <StyledCardsWrapper>
                    {showCards}
                </StyledCardsWrapper>
                <StyledButton>
                    <Link
                        to={`/section/${id}`}
                    >
                        See more
                    </Link>
                </StyledButton>
            </StyledList>
        )
    }
};

export default withRouter(
    withFetch(
        GridList
    )
);