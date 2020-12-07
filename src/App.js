// import logo from './logo.svg';


import './App.css';

import {ThemeProvider} from 'styled-components';
import {COLORS} from './Shared/styles';

import Card from './Components/Card/';
import Image from './Components/Image/';

function App() {
  return (
    <ThemeProvider theme={{colors: COLORS}}>
      <div className="App">
        <header></header>
        <main>
          <Card />
          <Image />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
