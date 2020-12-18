import React from 'react';
import styled from 'styled-components';

function Header({ downloads, likes }){
    const showDownloads = downloads 
        ? (<p><i className="fas fa-download"></i> {downloads}</p>)
        : null;
    const showLikes = likes 
        ? (<p><i className="fas fa-heart"></i> {likes}</p>)
        : null;
    return(
        <StyledHeader className="Card-Header">
            <StyledWrapper>
                {showDownloads}
                {showLikes}
            </StyledWrapper>
        </StyledHeader>
    );
}

export default Header; 

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    padding: 0 10%;
    transition: 0.1s linear;
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;