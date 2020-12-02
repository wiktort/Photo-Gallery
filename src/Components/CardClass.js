import React, {Component} from 'react';


class CardClass extends Component {
    render(){

        return(
        <div className="CardClass" style={{backgroundColor: "green"}}>
            <header>
                <h1>Mój pierwszy klasowy komponent</h1>
            </header>
            <main>
                <p>Treść...</p>
            </main>
            <footer>
                <p>Treść footer'a</p>
            </footer>
        </div>
        );
    }
};

export  {CardClass};