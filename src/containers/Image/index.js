import React, { Component } from 'react';
import styled from 'styled-components';

import Author from './Components/Author';
import Photo from './Components/Photo';
import Social from './Components/Social';

import withFetch from '../HOC/withFetch';
import { withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';


function Head(data){
      return(
        <Helmet>
            <meta property="og:image"  content={data?.url?.regular} />
        </Helmet>
      );
  };

class Image extends Component{

    render(){
        const { urls, alt_description: alt, user, description } = this.props.data; 
        return(
            <StyledWrapper>
                <Head url={urls} />
                <StyledRow>
                    <Author author={user} />
                    <Social path={this.props.other.location.pathname} />
                </StyledRow>
                <Photo urls={urls} alt={alt} desc={description} />
                 <StyledAttribution>
                 "Icon made by Freepik from www.flaticon.com"
                 </StyledAttribution>
            </StyledWrapper>
        );
    }
};

export default withRouter(
    withFetch(
        Image
    )
);

const StyledWrapper = styled.div`
`;

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2vh;

    @media screen and (orientation: landscape){
        max-width: 80vw;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 375px){
        justify-content: space-between;
    }
`;

const StyledAttribution = styled.div`
     font-size: 10px;
     color: gray;
 `;