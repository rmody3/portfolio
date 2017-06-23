import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProjectDetails from './projectDetails'
import {updateProjectDetails} from '../actions/index'
import '../stylesheets/project.css'


class Project extends Component {
  constructor(){
    super()
    this.handleOnClick=this.handleOnClick.bind(this)
  }

  handleOnClick (project){
    this.props.updateProjectDetails(project)
  }

  render() {
    return (
      <div className="project" style={{background:this.props.color}} onClick={this.handleOnClick.bind(null,this.props.title)}>
        <img className="project-icon" src={this.props.image} />
        <div className="project-title">{this.props.title}</div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({
//     updateProjectDetails: updateProjectDetails
//   }, dispatch)
// }

export default Project
// connect(null, mapDispatchToProps)(Project)
