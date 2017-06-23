import React, { Component } from 'react';
import Header from './components/header'
import About from './components/pages/about'
import Work from './components/pages/work'
import Welcome from './components/pages/welcome'
// import Main from './components/main'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Welcome />
        <Header />
        <About />
        <Work />
      </div>


    );
  }
}

export default App;
