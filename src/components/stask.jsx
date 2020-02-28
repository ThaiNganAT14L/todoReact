import React, { Component } from 'react';

export default class Stask extends Component{
    constructor(props){
        super(props);
    }    
    render(){
        return (
            <article className="article">
                <div className="content">{this.props.value}</div>
                <div className="btn-remove" onClick={()=>{this.props.handleDetele(this.props.id)}}>Remove</div>
            </article>
        )
    }
}
