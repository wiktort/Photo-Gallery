import React, {Component} from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1366px;
    margin: 0 auto;
        & img{
            max-height: 80vh;
        }
`;

class Photo extends Component {
    render(){
        const { urls, alt, desc } = this.props;
        console.log(this.props);
        return(
            <StyledImage>
                <figure>
                    <img src={urls.regular} alt={alt || "photo from Unsplash"} />
                    <figcaption>Author's description: {desc}</figcaption>
                </figure>
            </StyledImage>
        );
    }
};

export default Photo;