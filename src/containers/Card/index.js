import React, {Component} from 'react';
import CardFunc from './Card';
import CardClass from './CardClass';
import styled from 'styled-components';

const StyledWrapper = styled.div`
margin: 1vmax;
padding: 1vh 0;
`;

class Card extends Component{
    state = {
        classType: false,
        cardComponent: CardFunc,
    }

    componentDidMount() {
    }
    componentDidUpdate(){
    }

    switchCard = () => {
        const newClassType = !this.state.classType;
        this.setState(()=>{
            return {
                classType: newClassType,
                cardComponent: [CardFunc,CardClass][Number(newClassType)]
            }
        });
    }

    render(){
        const { id, url, alt } = this.props;
        return(
            <StyledWrapper>
                {/* <button onClick={this.switchCard}>Switch Card</button>
                <this.state.cardComponent url={this.props.url} /> */}
                <CardClass url={url} alt={alt} id={id} />
            </StyledWrapper>
        );
    }

};

export default Card;