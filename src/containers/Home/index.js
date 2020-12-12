import React, { Component }from 'react';
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';
import withFetch from '../HOC/withFetch';
import Section from './Components/GridList';
import settings from './global';

class Home extends Component {

    state={
        loading: true
    }

    componentDidMount(){
        this.getSectionsID();
    }

    componentDidUpdate(){
    }

    getSectionsID(){
        const { data } =  this.props;
        const sections =  data.map(section => {
                return section.id;
        });
        
        this.setState({ 
                sections,
                loading: false
        });   
    }

    createSections(list){
        const quantity = settings.sectionsListsSettings.listsToShow;
        const sections = list.map(item => {
            return <Section id={item} />
        });

        return sections.slice(0, quantity);
    }

    render(){
       const { sections, loading } = this.state;
        
       const showSections = loading || sections.length < 1
        ? null
        : this.createSections(sections);

        return(
            <div>
                <Helmet>
                    <meta
                        name="description"
                        content="Photo Gallery created with React"
                    />
                    <title>Home Page</title>
                </Helmet>
                <div>
                    {showSections}
                </div>
            </div>
        );
    }
};


export default withRouter(
    withFetch(
        Home
    )
);