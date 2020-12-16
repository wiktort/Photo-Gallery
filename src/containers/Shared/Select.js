
import React, { Component } from 'react';

class Select extends Component{

    constructor(){
        super();
        this.selectRef = React.createRef();
    }

    state={
        loading: true,
    }

    componentDidMount(){
        this.setState({loading: false});
        this.props.callback(this.selectRef)
    }

    createOptions = (options) => {

        return Object.values(options).reduce((acc, current, index) => {
             const { value, content } = current;
             return acc.concat(<option key={index} value={value}>{content}</option>);
         },[]);
    }

    render(){
        const { data, options, callback } = this.props;
        
        return(
            <div>
                <label key={data?.id + '-label'} htmlFor={data?.id}>{data?.content}</label>
                    <select 
                    key={data?.id + '-select'}
                    ref={this.selectRef} 
                    onChange={() => callback(this.selectRef)} 
                    name={data?.name} 
                    id={data?.id}>
                        {this.createOptions(options)}
                    </select>
            </div>
        );
    }
    
}

export default Select;
