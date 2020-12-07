import React, {Component} from 'react';
import styled from 'styled-components';
import like from '../../../assets/like.svg';

const StyledWrapper = styled.div`

`;

const StyledIcon = styled.div`
    width: 30px;
    height: 30px;

`;

class Social extends Component{
    render(){
        return(
            <StyledWrapper>
                <StyledIcon>
                    <img src={like} alt="heart icon" />
                </StyledIcon>
            </StyledWrapper>
        );
    }
};

export default Social;