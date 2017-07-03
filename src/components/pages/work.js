import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Project from '../../components/project'
import ProjectDetails from '../../components/projectDetails'
import Chronicle from '../../components/projects/chronicle'
import Prescribed from '../../components/projects/prescribed'
import YeaOrNay from '../../components/projects/yeaOrNay'
import { CSSTransitionGroup } from 'react-transition-group'
import '../../stylesheets/work.css'
import $ from 'jquery'


class Work extends Component {
  constructor(){
    super()
    this.state = {
      currProject: null,
      class: "projectDetails-inactive",
      currProjectTitle: null
    }
    this.updateProjectDetails=this.updateProjectDetails.bind(this)
  }

  updateProjectDetails(project){
    switch (project) {
      case "Chronicle":
        var currProject = <Chronicle />
        break;
      case "Prescribed":
        currProject = <Prescribed />
        break;
      case "Yea or Nay":
        currProject = <YeaOrNay />
        break;
    }
    if (this.state.class == "projectDetails-active" && this.state.currProjectTitle===project){
      this.setState(() => {
          return {
            currProject: null,
            currProjectTitle: null,
            class: "projectDetails-inactive"
          }
      })
    } else {
      this.setState(() => {
          return {
            currProject: currProject,
            currProjectTitle: project,
            class: "projectDetails-active"
          }
      })
    }
    $('html,body').animate({
            scrollTop: $("section.projectDetails-inactive").offset().top - 190},
        500);
    $('html,body').animate({
            scrollTop: $("section.projectDetails-active").offset().top} - 190,
        500);
  }


  render() {
    return (
      <section className="work">
        <div className="projects-container">
          <Project color="blue" image='images/chronicle_logo.svg' title='Chronicle' updateProjectDetails={this.updateProjectDetails}/>
          <Project color="red" image='images/prescribed_logo.svg' title='Prescribed' updateProjectDetails={this.updateProjectDetails}/>
          <Project color="green" image='images/yay_or_nay_logo.svg'title='Yea or Nay' updateProjectDetails={this.updateProjectDetails}/>
        </div>
        {<ProjectDetails class={this.state.class} currProject={this.state.currProject}/> }
      </section>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Work)
