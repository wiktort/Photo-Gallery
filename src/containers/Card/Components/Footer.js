import React from 'react';
import styled from 'styled-components';

function Footer({ location }) {
    const showCountry = location?.country 
        ? (<p>Country: {location?.country}</p>)
        : null;

    return(
        <StyledFooter className="Card-Footer">
            {showCountry}
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    padding: 0 10% 4% 10%;
    transition: 0.1s linear;
`;