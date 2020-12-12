import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


class CardClass extends Component {
    render(){
        const { id, url, alt } = this.props;
        return(


        <div className="CardClass" >
            <Link
                to={`/image/${id}`}
            >
                <Header />
                <Content url={url} alt={alt} />
                <Footer />
            </Link>
        </div>
        );
    }
};

export default CardClass;