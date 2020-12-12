import React, { Component } from 'react';
import { getFromUnsplash } from './actions';
import config from '../../config/config';


const map = {
    "/": {
        path: "/topics",
        perPage: ""
    },
    "/section/:id": {
        path: "/topics/:id",
        perPage: "20",
    },
    "/image/:id": {
        path: "/photos/:id",
        perPage: "",
    },
    "HomePageSection":{
        path: "/topics/:id/photos",
        perPage: "",
    }
};


const withFetch = BaseComponent => class extends Component {
    state = {
        data: {},
        loading: true,
    }

    componentDidMount(){
        const url = this.createURL();
        getFromUnsplash(url)
            .then(data => {
                this.setState({ 
                    data,
                    loading: false
                })
            });
    }

    createNewPath(key, id){
        const { params } = this.props.match;
        const regexp = new RegExp(':id');
     
        const newID = map[key].path.replace(regexp, id || params.id);

        const perPage = map[key].perPage > 0 ? `${newID}?per_page=${map[key].perPage}` : newID;

        return perPage;
    }

    createURL(){
        const id = this.props.id;
        const { path } = this.props.match;
        const url = config.unsplash.UNSPLASH_BASE_URL;
        const key = id
            ? "HomePageSection"
            : Object.keys(map).find(key => key === path);

        return url + this.createNewPath(key, id);
    }

    render (){
        const { data, loading } = this.state;

        return loading ? null :  <BaseComponent data={data} other={this.props}/>;
    }
};

export default withFetch;
