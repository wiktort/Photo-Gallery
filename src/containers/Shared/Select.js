
import React, { Component } from 'react';

class Select extends Component{

    state={
        loading: true,
    }

    componentDidMount(){
        this.setState({loading: false});
    }

    createOptions = (options) => {
        return Object.values(options).reduce((acc, current, index) => {
             const { value, content } = current;
             return acc.concat(<option key={index} value={value}>{content}</option>);
         },[]);
    }

    render(){
        const { data, options, callback } = this.props;
        const defaultValue = data?.defaultValue;
        return(
            <div>
                <label key={data?.id + '-label'} htmlFor={data?.id}>{data?.content}</label>
                    <select 
                    key={data?.id + '-select'}
                    onChange={(e) => callback(e)} 
                    defaultValue={defaultValue}
                    name={data?.name} 
                    id={data?.id}>
                        {this.createOptions(options)}
                    </select>
            </div>
        );
    }
    
}

export default Select;
