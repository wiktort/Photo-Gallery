import React, {Component} from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


class Card extends Component{
    state = {
        classType: false,
    }

    componentDidMount() {
    }
    componentDidUpdate(){
    }

    
    render(){
        const { id, url, alt } = this.props;
        return(
            
            <StyledLink to={`/image/${id}`}>
                <StyledWrapper className="CardClass">
                    <Header />
                    <Content url={url} alt={alt} />
                    <Footer />
                </StyledWrapper>
            </StyledLink>
        );
    }

};

export default Card;

const StyledLink = styled(Link)`
    margin: 1vmax;
    padding: 1vh 0;
`;

const StyledWrapper = styled.div`
    position: relative;
`;

