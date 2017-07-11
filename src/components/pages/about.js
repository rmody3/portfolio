import React, { Component } from 'react';
import '../../stylesheets/about.css'
import { CSSTransitionGroup } from 'react-transition-group'
import Skill from '../skill'
import $ from 'jquery'


class About extends Component {
  constructor(){
    super()
    this.scrollSkill = this.scrollSkill.bind(this)
  }


  scrollSkill(direction){
    let far = $( '#skills-container' ).width()/2*direction;
    let pos = $('#skills-container').scrollLeft() + far;
    $('#skills-container').animate( { scrollLeft: pos }, 1000)
  }



  render() {
    return (
      <section className="about">
          <div className="container">
            <div className="container top">
              <div className="container top left">
                <img className="profile-pic" src='images/profile-crop.jpg' />
                <div id="links">
                  <a target="_blank" title="follow me on twitter" href="https://twitter.com/RahulTMody"><img className="social" src="http://login.create.net/images/icons/user/twitter_30x30.png" /></a>
                  <a target="_blank" title="add me on linkedin" href="https://www.linkedin.com/in/rahul-mody/"><img className="social" src="images/linkedin.svg"/></a>
                  <a target="_blank" title="follow me on medium" href="https://medium.com/@RahulTMody"><img className="social" src="images/medium.png"/></a>
                  <a target="_blank" title="follow me on github" href="https://github.com/rmody3"><img  className="social" src="images/github.png"/></a>
                  <a target="_blank" title="check out my resume" href="files/resume.pdf"><img  className="social" src="images/adobe.jpeg"/></a>
                </div>
                <p id="email">Email: rmody3@gmail.com</p>
              </div>
              <div className="container top right">
                <h1 id="about-title">About Rahul</h1>
                <div id="summary">
                  Im <strong>Rahul Mody</strong>. I am a full stack web developer and love to build useful applications centered around simple data insights. I love creating and learning through creating, thats why I became a developer. My career did not start in web development though, it started in data. I graduated from Georgia Tech as an Industrial Engineer and worked as data analyst. Sometime after I made the decision to focus on development and studied Web Development at The Flatiron School in NYC. When Im not writing code, you can find me at a rec league game, on some hiking trail, or in the kitchen making a mess.
                </div>
              </div>
            </div>
            <div className="container bottom">
              <h1 id="skills-title">Skills</h1>
              <div id="skills-wrapper">
                <a className="prev" onClick={this.scrollSkill.bind(null,-1)}>&#10094;</a>
                <div id="skills-container">

                  <Skill image="images/ruby.png" title="Ruby" />
                  <Skill image="images/rails.png"  title="Rails"/>
                  <Skill image="images/javascript.png" title="Javascript ES6"/>
                  <Skill image="images/jquery.png" title="JQuery"/>
                  <Skill image="images/react.svg" title="React"/>
                  <Skill image="images/redux.png" title="Redux"/>
                  <Skill image="images/html5.png" title="HTML5"/>
                  <Skill image="images/css3.svg" title="CSS3"/>
                  <Skill image="images/git.png" title="GIT"/>
                  <Skill image="images/bash.png" title="BASH"/>
                  <Skill image="images/R.svg" title="R"/>
                </div>
                <a className="next" onClick={this.scrollSkill.bind(null,1)}>&#10095;</a>
              </div>
            </div>
          </div>

      </section>
    );
  }
}


export default About
