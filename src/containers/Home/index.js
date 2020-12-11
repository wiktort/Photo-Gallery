import React, { Component }from 'react';
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';
import withFetch from '../HOC/withFetch';
import Card from '../Card';

class Home extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <Helmet>
                    <meta
                        name="description"
                        content="Photo Gallery created with React"
                    />
                    <title>Home Page</title>
                </Helmet>
                <Card />
            </div>
        );
    }
};


export default withRouter(
    withFetch(
        Home
    )
);