import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.lightText};
        nav {
            ul {
                display: flex;
                align-items: center;
                padding: 2vh;
            }
                li{
                    margin-right: 10px;
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
                        <li><NavLink to='/'><i className="fas fa-home"></i>Home</NavLink></li>
                        <li><NavLink to='/image/id'>Image</NavLink></li>
                    </ul>
                </nav>
            </StyledHeader>
        );
    }
};

export default Header;