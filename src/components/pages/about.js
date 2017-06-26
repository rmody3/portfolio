import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../stylesheets/about.css'
import { CSSTransitionGroup } from 'react-transition-group'

class About extends Component {
  constructor(){
    super()
    this.state = {
      aboutTitle: ["a web developer", "a builder", "a data enthusiast", "an outdoorsman" ],
      currentTitleIndex: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      let currIndex = this.state.currentTitleIndex + 1;
      if (currIndex >= this.state.aboutTitle.length) {
         currIndex = 0;
     }
        this.setState(() => {
            return {
              currentTitleIndex: currIndex
            }
        });
    }, 2000);
  }

  render() {
    let currAboutTitle=
    <span className="i-am-text" key={this.state.aboutTitle[this.state.currentTitleIndex]}>
      {this.state.aboutTitle[this.state.currentTitleIndex]}
   </span>
    return (
      <section className="about">
          <div className="container">
            <div className="container top">
              <div className="container top left">
                <img className="profile-pic" src='images/profile-crop.jpg' />
                <div id="links">
                  <a target="_blank" title="follow me on twitter" href="https://twitter.com/RahulTMody"><img className="social" src="http://login.create.net/images/icons/user/twitter_30x30.png" /></a>
                  <a target="_blank" title="add me on linkedin" href="https://www.linkedin.com/in/rahul-mody/"><img className="social" src="images/linkedin.svg" height="30" width="30" /></a>
                  <a target="_blank" title="follow me on medium" href="https://medium.com/@RahulTMody"><img className="social" src="images/medium.png" height="30" width="30" /></a>
                  <a target="_blank" title="follow me on github" href="https://github.com/rmody3"><img  className="social" src="images/github.png" height="30" width="30" /></a>
                  <a target="_blank" title="check out my resume" href="files/resume.pdf"><img  className="social" src="images/adobe.jpeg" height="30" width="30" /></a>
                </div>
              </div>
              <div className="container top right">
                <div id="summary">
                  Im <strong>Rahul Mody</strong>. I am a full stack web developer and love to build useful applications centered around simple data insights. I love creating and learning through creating, thats why I became a developer. My career did not start in web development though, it started in data. I graduated from Georgia Tech as an Industrial Engineer and worked as data analyst. Sometime after I made the decision to focus on development and studied Web Development at The Flatiron School in NYC. When Im not writing code, you can find me at a rec league game, on some hiking trail, or in the kitchen making a mess.
                </div>
              </div>
            </div>
              <div id="skills-container">
                <img className="skill" src="images/ruby.png" />
                <img className="skill" src="images/rails.png" />
                <img className="skill" src="images/javascript.png" />
                <img className="skill" src="images/jquery.png" />
                <img className="skill" src="images/react.svg" />
                <img className="skill" src="images/redux.png" />
                <img className="skill" src="images/html5.png" />
                <img className="skill" src="images/css3.svg" />
                <img className="skill" src="images/git.png" />
                <img className="skill" src="images/bash.png" />
                <img className="skill" src="images/R.svg" />
              </div>
          </div>

      </section>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(About)
