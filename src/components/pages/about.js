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
                  <a target="_blank" title="follow me on github" href="files/resume.pdf"><img  className="social" src="images/adobe.jpeg" height="30" width="30" /></a>
                </div>
              </div>
              <div id="summary">
                Im <strong>Rahul Mody</strong>. I am a full stack web developer and love to build useful applications centered around simple data insights. I love creating and learning through creating, thats why I became a developer. My career did not start in web development though, it started in data. I graduated from Georgia Tech as an Industrial Engineer and worked as data analyst. Sometime after I made the decision to focus on development and studied Web Development at The Flatiron School in NYC. When Im not writing code, you can find me at a rec league game, on some hiking trail, or in the kitchen making a mess.
              </div>
            </div>
            <div className="container bottom">
              <h3>Skills</h3>
              <ul>
                <li>Programming: Ruby on Rails, Javascript, React/Redux, JQuery, R, BASH, GIT, MATLAB</li>
                <li>Statistical Analysis: Forecasting/ Regression, Probability Distribution Modeling, Hypothesis Testing</li>
              </ul>
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
