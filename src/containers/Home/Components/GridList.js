import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Card from '../../Card';
import withFetch from '../../HOC/withFetch';


class GridList extends Component{

    componentDidMount(){
        
        console.log(this.props);
    }

    render(){

        return (

            <Card />
        )
    }
};

export default withRouter(
    withFetch(
        GridList
    )
);