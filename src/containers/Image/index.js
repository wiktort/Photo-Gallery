import React, { Component } from 'react';
import styled from 'styled-components';

import Author from './Components/Author';
import Photo from './Components/Photo';
import Social from './Components/Social';

import withFetch from '../HOC/withFetch';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`

`;

class Image extends Component{

    render(){
        return(
            <Wrapper>
                <Social />
                <Photo />
                <Author />
            </Wrapper>
        );
    }
};

export default withRouter(
    withFetch(
        Image
    )
);
