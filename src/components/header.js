import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {updateView} from '../actions/index'
import '../stylesheets/header.css'


class Header extends Component {
  constructor(){
    super()
    this.handleOnClick=this.handleOnClick.bind(this)
  }

  handleOnClick(view){
    this.props.updateView(view)
  }

  render() {
    return (
      <div className="header">
        <ul className="header-list">
          <li onClick={this.handleOnClick.bind(null, "home")}>Home </li>
          <li onClick={this.handleOnClick.bind(null, "work")}>Work </li>
          <li onClick={this.handleOnClick.bind(null, "blog")}>Blog</li>
          <li onClick={this.handleOnClick.bind(null, "about")}>About</li>
          <li onClick={this.handleOnClick.bind(null, "contact")}>Contact</li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateView: updateView
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
