import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


class Header extends Component {
    
    render(){
        return(
            <StyledHeader>
                <nav>
                    <ul>
                        <li><NavLink to='/'><i className="fas fa-home"></i>Home</NavLink></li>
                    </ul>
                </nav>
            </StyledHeader>
        );
    }
};

export default Header;


const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.lightText};
    z-index: 1;
        nav {
            ul {
                display: flex;
                align-items: center;
                height: ${(props) => props.theme.sizes.headerHeight};
                padding-left: 2vmax;
            }
                li{
                    margin-right: 10px;
                }
        a {
            color: ${(props) => props.theme.colors.lightText};
        }
    }
`;