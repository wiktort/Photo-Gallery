import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
        h2{
            margin-left: 10px;
        }
`;

const Avatar = styled.div`
    border-radius: 50%;
    overflow: hidden;
    height: 64px;
    width: 64px;
`;

class Author extends Component {

    render(){
        const { name, profile_image: avatar } = this.props.author;

        return(
            <Wrapper>
                <Avatar>
                    <img src={avatar?.medium} alt="author's avatar"/>
                </Avatar>
                 <h2>{name}</h2>
            </Wrapper> 
        );
    }
};

export default Author;