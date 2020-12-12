import React, {Component} from 'react';
import styled from 'styled-components';
import like from '../../../assets/like.svg';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import config from '../../../config/config';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
        & button {
            width: 30px;
            height: 30px;
        }
`;

const StyledIcon = styled.button`
    margin-right: 10px;
    padding: 1px;
        img{
            filter: invert(15%) sepia(8%) saturate(1083%) hue-rotate(182deg) brightness(89%) contrast(91%);
        }
    &.active{
        background-color: ${(props) => props.theme.colors.primary};
        img{
            filter: invert(86%) sepia(41%) saturate(3569%) hue-rotate(193deg) brightness(137%) contrast(107%);
        }
    }
    
`;
 

class Social extends Component{

    state={
        liked: false
    }

    handleClick(){
        this.setState({liked: !this.state.liked})
    }

    render(){
        const { path } = this.props;
        return(
            <StyledWrapper>
                <StyledIcon 
                    className={['inactive', 'active'][Number(this.state.liked)]} 
                    onClick={() => this.handleClick()}
                >
                    <img src={like} alt="heart icon" />
                </StyledIcon>
                <FacebookShareButton 
                    url={config.self.url + path} 
                    children={<FacebookIcon size={30} round={true}/>} 
                />
            </StyledWrapper>
        );
    }
};

export default Social;