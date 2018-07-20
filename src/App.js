import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses=[
      {name:'Ios developer', price:200},
      {name:'Android developer', price:300},
      {name:'react developer', price:400},
      {name:'Angular developer', price:500},

    ]
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course sales Page</h2>
          <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
