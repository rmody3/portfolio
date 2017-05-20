import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../stylesheets/contact.css'


class Contact extends Component {
  // constructor(){
  //   super()
  // }

  render() {
    return (
      <div className="contact">
        Contact Page
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Contact)
