import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../stylesheets/blog.css'


class Blog extends Component {
  // constructor(){
  //   super()
  // }

  render() {
    return (
      <div className="blog">
        Blog Page
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Blog)