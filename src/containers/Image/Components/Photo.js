import React, {Component} from 'react';
import styled from 'styled-components';


class Photo extends Component {
    render(){
        const { urls, alt, desc } = this.props;
        return(
            <StyledImage>
                <StyledFigure>
                    <img src={urls?.regular} alt={alt || "photo from Unsplash"} />
                    <figcaption>Author's description: {desc}</figcaption>
                </StyledFigure>
            </StyledImage>
        );
    }
};

export default Photo;

const StyledImage = styled.div`
    display: flex;
    justify-content: center;
        & img{
            max-height: 80vh;
        }
        & figcaption{
            align-self: flex-start;
            padding: 0 30px 20px;
        }
`;

const StyledFigure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
`;