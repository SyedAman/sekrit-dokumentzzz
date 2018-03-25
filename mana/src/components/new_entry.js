import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewEntry extends Component {
  render() {
    return (
      <div>
        LETS MAKE A NEW ENTRY
        <Link to="/">Home</Link>
      </div>
    );
  }
}