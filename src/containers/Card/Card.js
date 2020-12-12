import React, { Component } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function Card(){

    return(
        <div className="Card">
            <Header type='funkcyjny' />
            <Content />
            <Footer />
        </div>
    );
}

export default Card;