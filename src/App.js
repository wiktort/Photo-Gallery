import React, {Component} from 'react';

import {BrowserRouter as Router} from "react-router-dom";
import ApplicationRouter from './containers/routes/ApplicationRouter';

import {ThemeProvider} from 'styled-components';
import {COLORS} from './containers/Shared/styles';
import GlobalStyle from './containers/Shared/GlobalStyles';

import Header from './containers/Header';


class App extends Component {

  componentDidMount(){
  }
  
    render(){
        return (
          <ThemeProvider theme={{colors: COLORS}}>
            <Router>
              <div className="App">
                <GlobalStyle />
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
