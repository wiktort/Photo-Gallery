import React, {Component} from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.lightText};
    height: 150px;
    margin-top: 10px;
    a{
        color: ${(props) => props.theme.colors.lightText};
        text-decoration: underline;
    }
`;

class Footer extends Component {
    
    render(){
        return(
            <StyledFooter>
                <p>Created by <a href="https://github.com/wiktort">Wiktor Tumiński</a></p>
            </StyledFooter>
        );
    }
};

export default Footer;