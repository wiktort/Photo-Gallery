import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Card from '../../Card';
import withFetch from '../../HOC/withFetch';

import settings from '../global';

import styled from 'styled-components';


const StyledList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2vh;
    padding-top: 1vh;
    border-top: 1px solid ${(props) => props.theme.colors.primary};
        h2{
            text-transform: uppercase;
            font-size: 1.5rem;
        }
`;
const StyledCardsWrapper = styled.div`
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        & > div{
            max-width: 320px;
        }
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
    background-color: ${(props) => props.theme.colors.button};
    color: ${(props) => props.theme.colors.lightText};
    cursor: pointer;
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
        const { slug, title} = this.props.other;
        const showCards = loading 
            ? null
            : this.createCards();

        return (
            <StyledList>
                <h2>{title}</h2>
                <StyledCardsWrapper>
                    {showCards}
                </StyledCardsWrapper>
                <Link
                    to={`/section/${slug}`}
                >
                    <StyledButton>
                        See more
                    </StyledButton>
                </Link>
            </StyledList>
        )
    }
};

export default withRouter(
    withFetch(
        GridList
    )
);