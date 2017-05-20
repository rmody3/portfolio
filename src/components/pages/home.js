import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../stylesheets/home.css'


class Home extends Component {
  // constructor(){
  //   super()
  // }

  render() {
    return (
      <div className="home">
        Home Page
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Home)
