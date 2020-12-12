import React, {Component} from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


class CardClass extends Component {
    render(){

        return(


        <div className="CardClass" >
            <Header />
            <Content url={this.props.url} alt={this.props.alt} />
            <Footer />
        </div>
        );
    }
};

export default CardClass;