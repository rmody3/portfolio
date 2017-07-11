import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {updateView} from '../actions/index'
import '../stylesheets/header.css'
import $ from 'jquery'


class Header extends Component {
  constructor(){
    super()
    this.handleOnClick=this.handleOnClick.bind(this)
  }

  handleOnClick(view){
    this.props.updateView(view)
  }

  componentDidMount(){
    var welcome = "#10e88a",
		about = "#7f3995",
		work = "#0d78e7"

    var init_header_position = $('#header').offset().top
    $(window).scroll(function(){
      var header = $('#header'),
          scroll = $(window).scrollTop(),
          height = $("#header").outerHeight()

      if (scroll >= init_header_position){
        header.removeClass('sticky');
        header.addClass('fixed');

      } else {
        header.removeClass('fixed');
        header.addClass('sticky');
        header.css('margin-bottom', height *-1)
      }
    });

    //if size of viewport changes than init header position is different and causes header to jump
  }
  //
  //   $(window).on("scroll touchmove", function() {
  //   		if ($(document).scrollTop() >= $("#header").position().top) {
  //   				$('#header').add
  //   				$('#header').css('position', "fixed")
  //       };
  //
  //   		if ($(document).scrollTop() > $("#about").position().top) {
  //   				$('#header').css('background', about)
  //   		};
  //
  //   		if ($(document).scrollTop() > $("#work").position().top) {
  //   				$('#header').css('background', work)
  //   		};
  //   });


  render() {
    return (
      <nav className="sticky" id="header">
        <div className="header-list">
          <div onClick={this.handleOnClick.bind(null, "about")}>About</div>
          <div onClick={this.handleOnClick.bind(null, "work")}>Work </div>
          <div><a href="https://medium.com/@RahulTMody">Blog</a></div>
          <div><a href="mailto:rmody3@gmail.com">Contact Me!</a></div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateView: updateView
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
