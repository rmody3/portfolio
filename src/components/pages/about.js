import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../stylesheets/about.css'


class About extends Component {
  // constructor(){
  //   super()
  // }

  render() {
    return (
      <div className="about">
        About Page
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(About)
