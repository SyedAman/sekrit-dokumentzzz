import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ViewEntry extends Component {
  render() {
    return (
      <div>
        i am an entry
        <Link to="/">Home</Link>
      </div>
    );
  }
}