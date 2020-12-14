import React, {Component} from 'react';
import styled from 'styled-components';


class Photo extends Component {
    render(){
        const { urls, alt, desc } = this.props;
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

const StyledImage = styled.div`
    display: flex;
    justify-content: center;
        & img{
            max-height: 80vh;
        }
        & figcaption{
            padding: 0 30px 20px;
        }
`;