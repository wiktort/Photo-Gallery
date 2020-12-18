import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import Card from '../../Card';
import withFetch from '../../HOC/withFetch';
import { codesGenerator } from '../../Shared/helpers';

import settings from '../global';


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
        if(!Array.isArray(data)) return;
        const images = data.map(item => {
            return <Card data={item} key={codesGenerator()} />;
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

const StyledList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 2vmax;
    padding-bottom: 4vmax;
    border-top: 1px solid ${(props) => props.theme.colors.primary};
        h2{
            text-transform: uppercase;
            font-size: 1.5rem;
        }
    &::first-of-type{
        border: none;
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