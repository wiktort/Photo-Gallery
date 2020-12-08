import React, {Component} from 'react';
import styled from 'styled-components';

import Author from './Components/Author';
import Photo from './Components/Photo';
import Social from './Components/Social';

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

export default Image;