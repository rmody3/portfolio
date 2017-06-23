import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../stylesheets/welcome.css'
import { CSSTransitionGroup } from 'react-transition-group'

class Welcome extends Component {
  constructor(){
    super()
    this.state = {
      welcomeTitle: ["a web developer", "a builder", "a data enthusiast", "an outdoorsman" ],
      currentTitleIndex: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      let currIndex = this.state.currentTitleIndex + 1;
      if (currIndex >= this.state.welcomeTitle.length) {
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
    let currWelcomeTitle=
    <span className="title-changing" key={this.state.welcomeTitle[this.state.currentTitleIndex]}>
      {this.state.welcomeTitle[this.state.currentTitleIndex]}
   </span>
    return (
      <section className="welcome">
        <div className="title-wrapper">
          <h1>
            <span className="title-static">
              Hi, I'm Rahul,
            </span>
            <CSSTransitionGroup
              transitionName="title-changing"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={.01}>
              {currWelcomeTitle}
            </CSSTransitionGroup>
          </h1>
        </div>
      </section>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Welcome)
