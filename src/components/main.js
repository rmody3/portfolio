import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './pages/home'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Work from './pages/work'
import '../stylesheets/main.css'


class Main extends Component {
  constructor(){
    super()
  }

  showView(){
    switch(this.props.view) {
      case "home":
        return <Home />;
      case "work":
        return <Work />;
      case "blog":
        return <Blog />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <div className="main">
        {this.showView()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Main)
