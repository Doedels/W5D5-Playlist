import React, { Component } from 'react';
import './App.css';
import Body from './Containers/Body';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Playlist</h1>
        <Body />
      </div>
    )
  }
}

export default App; 
