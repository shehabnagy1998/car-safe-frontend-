import React, { Component } from 'react';
import './App.scss';
import io from 'socket.io-client';
import { LOCAL_URL } from './constants/CONSTANTS';

class App extends Component {

  componentDidMount() {
    const socket = io(LOCAL_URL);
    socket.once('connect', _ => { console.log('client connected') });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, World</h1>
      </div>
    );
  }
}

export default App;
