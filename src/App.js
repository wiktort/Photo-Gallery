import './App.css';

import {ThemeProvider} from 'styled-components';
import {COLORS} from './containers/Shared/styles';
import GlobalStyle from './containers/Shared/GlobalStyles';

import Header from './containers/Header';
import Card from './containers/Card';
import Image from './containers/Image/';



function App() {
  return (
    <ThemeProvider theme={{colors: COLORS}}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <main>
          <Card />
          <Image />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
