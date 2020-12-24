import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// I have changed react-helmet into react-helmet-async, because the first one relies on react-side-effect which uses "UNSAFE_componentWillMount in strict mode". 

import { BrowserRouter as Router } from "react-router-dom";
import ApplicationRouter from './containers/routes/ApplicationRouter';

import styled, { ThemeProvider } from 'styled-components';
import { COLORS, SIZES } from './containers/Shared/styles';
import GlobalStyles from './containers/Shared/GlobalStyles';
import StyledColumn from './containers/Shared/Grid/StyledColumn';
import StyledRow from './containers/Shared/Grid/StyledRow';
import config from './config/config';

import Header from './containers/Header';
import Footer from './containers/Footer';

class Head extends Component {

  render(){
    return(
      <Helmet>
          <meta
                name="description"
                content="Photo Gallery created with React"
          />
          <title>React based Photo Gallery</title>
          <meta property="og:url"           content={config.self.url} />
          <meta property="og:type"          content="website" />
          <meta property="og:title"         content="React based Photo Gallery" />
          <meta property="og:description"   content="Photo Gallery created with React" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet" />
      </Helmet>
    )
  }
};

class App extends Component {

  componentDidMount(){
  }
  
    render(){
        return (
            <ThemeProvider theme={{colors: COLORS, sizes: SIZES}}>
              <Router>
                <HelmetProvider >
                  <StyledWrapper>
                    <Head />
                    <GlobalStyles />
                    <Header />
                      <StyledRowWrapper>
                        <StyledMain as="main">
                          <ApplicationRouter />
                        </StyledMain>
                      </StyledRowWrapper>
                    <Footer />
                  </StyledWrapper>
                </HelmetProvider>
              </Router>
            </ThemeProvider>
        );
    }
};


export default App;

const StyledWrapper = styled(StyledColumn)`
    min-height: 100vh;
`;

const StyledRowWrapper = styled(StyledRow)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledMain = styled(StyledColumn)`
  flex-grow: 1;
`;