import React, {Component} from 'react';
import styled from 'styled-components';


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


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2vmin;
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