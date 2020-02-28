import React, { Component } from 'react';
import Form from './form';
import Stask from './stask';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      stask:[
      ]
    }
    this.addArticle = this.addArticle.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
  }
  addArticle(event){
    event.preventDefault();
    let value = event.target.children[0].value;
    event.target.children[0].value = '';
    let stasks = this.state.stask;
    if(value !== ''){
      stasks.push({
        content:value,
        id: stasks.length+1
      })
      this.setState({
        stask: stasks
      })
    }
  }

  removeArticle(id){
    let stasks = this.state.stask;
    let new_stasks = stasks.filter(item => item.id != id)
    console.log(new_stasks)
    this.setState({
      stask: new_stasks
    })
  }
  render(){
    return (
      <div className= "main">
        <form className= "input-div" onSubmit= {this.addArticle}>
          <input type="text"/>
          <button className="btn-add" type="submit">Add</button>
        </form>
        <div className="list-stask">
          {this.state.stask.length>0 && this.state.stask.map(item => <Stask value= {item.content} id={item.id} handleDetele = {this.removeArticle}/>) }
        </div>
      </div>
    )
  }
}

export default App;
