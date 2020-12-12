import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.lightText};
        nav {
            ul {
                display: flex;
            }
        a {
            color: ${(props) => props.theme.colors.lightText};
        }
    }
`;

class Header extends Component {
    
    render(){
        return(
            <StyledHeader>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/image/id'>Home</NavLink></li>
                    </ul>
                </nav>
            </StyledHeader>
        );
    }
};

export default Header;