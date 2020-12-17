import React, {Component} from 'react';


class Content extends Component{

    render(){
        return(
            <div>
                <img src={this.props.url} alt={this.props.alt} />
            </div>
        );
    }
}

export default Content;