import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import { codesGenerator, createURL } from '../Shared/helpers';
import { getFromUnsplash } from '../Shared/api';
import settings from './global';
import Card from '../Card';
import Select from '../Shared/Select';
import Loader from '../Shared/Loader';
import StyledColumn from '../Shared/Grid/StyledColumn';


class Section extends Component{

    state={
        data: [],
        cards: [],
        page: 1,
        hasMore: true,
        sortBy: settings.sort.data.defaultValue,
    }
  
    checkData = (data) => {
        return data.length >= 1 
        ? data 
        : data.concat(
        <div key={codesGenerator()}>
            <p>Couldn't get any data.. Please comeback later ;)</p>
        </div>
        );
    }

    getURL(){
        const { slug } = this.props.match.params;
        const { page, sortBy } = this.state;

        const values = {
            id: null,
            slug: slug,
            params:{
                page: page,
                perPage: settings.perPage,
                order: sortBy,
            },
            path: settings.path,
            isSection: true
        };
        return createURL(values);
    }


    getData = () =>{
       
        const url = this.getURL();

        getFromUnsplash(url)
            .then(data => {
                if(data.length < 1){
                    this.setState((prevstate) => ({
                        hasMore: false,
                        cards: this.checkData(prevstate.cards),
                    }));
                    throw console.warn("no more data");
                } else {
                  return data;  
                };
            })
            .then(data => {
                this.setState((prevstate) => ({
                    data: prevstate.data.concat(data),
                    cards: prevstate.cards.concat(this.createCards(data)),
                    page: prevstate.page += 1,
                    })    
                );
            });
    }
    
    createCards= (data) => {
        const images = data.map(item => {
            const key = codesGenerator();
            return <Card key={key} data={item} />
        });

        return images;
    }

    sort = (e) => {
        if(!e.target.options) return;
        const options = e.target.options;
        const selectedIndex = options.selectedIndex;
        const selectedValue = options[selectedIndex]?.value;
  
        this.setState({
            sortBy: selectedValue,
            data: [],
            cards: [],
            page: 1
        });
    }

    render(){
        const { cards, hasMore } = this.state;
        const { data, options } = settings.sort;
        const load = <Loader key={codesGenerator()} />;

        return(
                <StyledList>
                    <StyledHeader>
                        <h2>{this.props.match.params.slug}</h2>
                        <Select callback={this.sort} data={data} options={options} />
                    </StyledHeader>
                    <StyledInfiniteScroll
                    initialLoad={true}
                    loadMore={this.getData.bind(this)}
                    hasMore={hasMore}
                    loader={load}>
                        <StyledCardsWrapper>
                            {cards}
                        </StyledCardsWrapper>
                    </StyledInfiniteScroll>
                </StyledList>
        );
    }

};

export default withRouter(
    Section
);

const StyledList = styled(StyledColumn)`
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    flex-wrap: wrap;
    padding-top: 1vh;
        h2{
            text-transform: uppercase;
            font-size: 1.5rem;
        }
`;
const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: ${(props) => props.theme.sizes.headerHeight};
    background-color: ${(props) => props.theme.colors.background};
    @media screen and (min-width: 533px){
        grid-template-columns: repeat(3, 1fr);
        h2{
            grid-column-start: 2;
        }
    }
`;
const StyledInfiniteScroll = styled(InfiniteScroll)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
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
        & p {
            text-align: center;
        }

`;