import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import { codesGeneretor, createURL } from './helpers';
import { getFromUnsplash } from './actions';

import Card from '../Card';


const StyledList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2vh;
    padding-top: 1vh;

    border-top: 1px solid ${(props) => props.theme.colors.primary};
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


class Section extends Component{

    state={
        data: [],
        cards: [],
        page: 1,
        loading: true,
    }

    componentDidMount(){
        this.getData();
    }

    getData = () =>{
        const { slug } = this.props.match.params;
        const url = createURL(slug, this.state.page);

        getFromUnsplash(url)
            .then(data => {
                this.setState((prevstate) => ({
                    data: prevstate.data.concat(data),
                    cards: prevstate.cards.concat(this.createCards(data)),
                    page: prevstate.page += 1,
                    loading: false
                    })    
                );
            });
    }
    
    createCards= (data) => {
        const images = data.map(item => {
            const key = codesGeneretor();
            return <Card key={key} url={item.urls.small} alt={item.alt_description} id={item.id}/>
        });

        return images;
    }

    render(){
        const loader = <div className="loader">Loading ...</div>;
        return(
            <StyledList>
                <h2>{this.props.match.slug}</h2>
                <InfiniteScroll
                pageStart={0}
                loadMore={this.getData.bind(this)}
                hasMore={true}
                loader={loader}>

                <StyledCardsWrapper>
                    {this.state.cards}
                </StyledCardsWrapper>

            </InfiniteScroll>
                
            </StyledList>
        )
    }

};


export default withRouter(
    Section
);
