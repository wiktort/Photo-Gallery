import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { BrowserRouter as Router } from "react-router-dom";
import ApplicationRouter from './containers/routes/ApplicationRouter';

import { ThemeProvider } from 'styled-components';
import { COLORS } from './containers/Shared/styles';
import GlobalStyles from './containers/Shared/GlobalStyles';

import Header from './containers/Header';


class App extends Component {

  componentDidMount(){
  }
  
    render(){
        return (
          <ThemeProvider theme={{colors: COLORS}}>
            <Router>
              <div className="App">
              <Helmet>
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet" />
                </Helmet>
                <GlobalStyles />
                <Header />
                <main>
                  <ApplicationRouter />
                </main>
              </div>
            </Router>
          </ThemeProvider>
        );
    }
};


export default App;
