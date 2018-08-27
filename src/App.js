import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmBox from './containers/FilmBox';

class App extends Component {
  render() {
    return (
      <div>
        <FilmBox />
      </div>
    );
  }
}

export default App;
