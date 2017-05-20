import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../stylesheets/work.css'


class Work extends Component {
  // constructor(){
  //   super()
  // }

  render() {
    return (
      <div className="work">
        Work Page
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Work)
