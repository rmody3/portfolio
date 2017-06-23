import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import About from './pages/about'
import Work from './pages/work'
import '../stylesheets/main.css'


class Main extends Component {
  constructor(){
    super()
  }

  showView(){
    switch(this.props.view) {
      case "work":
        return <Work />;
      case "about":
        return <About />;
      default:
        return <About />;
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
