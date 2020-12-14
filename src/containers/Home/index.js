import React, { Component }from 'react';
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';
import withFetch from '../HOC/withFetch';
import StyledColumn from '../Shared/Grid/StyledColumn';
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
        if(!Array.isArray(data)) return;
        const sections =  data.map(section => {
                return {
                    id: section.id,
                    title: section.title,
                    slug: section.slug
                };
        });
        
        this.setState({ 
                sections,
                loading: false
        });   
    }

    createSections(list){
        const quantity = settings.sectionsListsSettings.listsToShow;
        const sections = list.map(item => {
            return <Section key={item.id} id={item.id} title={item.title} slug={item.slug} />
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
                <StyledColumn>
                    {showSections}
                </StyledColumn>
            </div>
        );
    }
};


export default withRouter(
    withFetch(
        Home
    )
);