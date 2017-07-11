import React, { Component } from 'react';
import '../stylesheets/skill.css'


class Skill extends Component {
  constructor(){
    super()
  }


  render() {

    return (
      <div className="skill-container">
        <img src={this.props.image} className="skill-image" />
        <div className="middle">
          <div className="text">{this.props.title}</div>
        </div>
      </div>
    );
  }
}


export default Skill
