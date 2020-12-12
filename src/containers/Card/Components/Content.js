import React, {Component} from 'react';


class Content extends Component{

    render(){
        return(
            <main>
                <img src={this.props.url} alt={this.props.alt} />
            </main>
        );
    }
}

export default Content;