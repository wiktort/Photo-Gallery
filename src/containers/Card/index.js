import React, {Component} from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { getFromUnsplash } from '../Shared/api';
import { createURL } from '../Shared/helpers';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


const settings = {
    path: "/photos/:id"
}

class Card extends Component{
    state = {
        data: {},
        loading: true,
    }

    componentDidMount(){
        const url = this.getURL();
        getFromUnsplash(url)
            .then(data => {
                this.setState({ 
                    data,
                    loading: false
                })
            });
    }
    
    getURL(){
        const { id } = this.props.data;

        const values = {
            id: id,
            slug: null,
            params:{
                page: "",
                perPage: "",
                order: "",
            },
            path: settings.path,
            isSection: false
        };
        return createURL(values);
    }

    render(){
        const { id, urls, alt_description: alt } = this.props.data;
        const { downloads, likes, location } = this.state.data;

        return(
            
            <StyledLink to={`/image/${id}`}>
                <StyledWrapper className="CardClass">
                    <Header downloads={downloads} likes={likes}/>
                    <Content url={urls?.small} alt={alt} />
                    <Footer location={location}/>
                </StyledWrapper>
            </StyledLink>
        );
    }

};

export default Card;

const StyledLink = styled(Link)`
    margin: 1vmax;
    padding: 1vh 0;
    &:hover .Card-Footer {
        transform: translateY(-100%);
    };
    &:hover .Card-Header{
        transform: translateY(100%);
    }
`;

const StyledWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

