import React, { Component } from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(event){
        if(this.state.value){
            this.state.value = event.target.value
        }
    }
    render(){
        return(
            <form className= "input-div">
                <input type="text" onChange= {this.inputChange} value={this.state.value}/>
                <button className="btn-add" type="submit">Add</button>
            </form>
        )
    }
} 