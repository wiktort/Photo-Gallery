import React, { Component } from 'react';
import { getFromUnsplash } from './actions';
import { createURL } from '../Shared/helpers';

const map = {
    "/": {
        path: "/topics",
        perPage: ""
    },
    "/image/:id": {
        path: "/photos/:id",
        perPage: "",
    },
    "HomePageSection":{
        path: "/topics/:slug/photos",
        perPage: "",
    }
};


const withFetch = BaseComponent => class extends Component {
    state = {
        data: {},
        loading: true,
    }

    componentDidMount(){
        const url = this.getURL();
        console.log(url)
        getFromUnsplash(url)
            .then(data => {
                this.setState({ 
                    data,
                    loading: false
                })
            });
    }

    getURL(){
        const { path, params } = this.props.match;
        const { id, slug, isSection } = this.props;

        const key = isSection
            ? "HomePageSection"
            : Object.keys(map).find(key => key === path);

        const values = {
            id: id || params.id,
            slug: slug,
            params: {
                page: "",
                perPage: map[key]?.perPage,
                order: ""
            },
            path: map[key]?.path,
            isSection: isSection || false
        };
        console.log(values, this.props)
        return createURL(values);
    }
    

    render (){
        const { data, loading } = this.state;

        return loading ? null :  <BaseComponent data={data} other={this.props}/>;
    }
};

export default withFetch;
