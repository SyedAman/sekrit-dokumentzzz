import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      date: new Date(),
      phrase: '',
      log: '',
    }
  }

  handleChange = e => {
    const key = e.target.id;
    const value = e.target.value;
    const newState = {};
    newState[key] = value;
    this.setState(newState); 
  }

  render() {
    return (
      <div className="New-Entry">
        <Link className="waves-effect waves-light btn" to="/">Home</Link>
        <h1>New Journal Entry</h1>
        <input id="title" type="text" placeholder="Title" 
          value={this.state.title}
          onChange={ this.handleChange } 
        />
        <input id="phrase" type="text" placeholder="Phrase" 
          value={this.state.phrase}
          onChange={ this.handleChange }        
        />
        <input id="file" type="file"/>
        <button className="waves-effect waves-light btn" >Upload</button>
        <br/>
        <input id="date" type="date"
          value={this.state.date}
          onChange={ this.handleChange }        
        />
        <br/>
        <textarea id="log" name="log" cols="30" rows="10" placeholder="Log"
          value={this.state.log}
          onChange={ this.handleChange }
        />
        <button className="waves-effect waves-light btn btn-submit" onClick={() => this.props.createEntry(this.state)} >Submit</button>
      </div>
    );
  }
}