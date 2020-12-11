import React, { Component }from 'react';
import { withRouter } from 'react-router-dom';
import withFetch from '../HOC/withFetch';
import Card from '../Card';

class Home extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <section>
                <Card />
            </section>
        );
    }
};


export default withRouter(
    withFetch(
        Home
    )
);