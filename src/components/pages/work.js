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
      project: null,
      class: "projectDetails-inactive",
      currProjectTitle: null
    }
    this.updateProjectDetails=this.updateProjectDetails.bind(this)
  }

  updateProjectDetails(project){
    switch (project) {
      case "chronicle":
        var project = {
          title: "Chronicle",
          github: "http://getthewholestory.herokuapp.com/",
          demo: "https://github.com/rmody3/chronicle",
          tagline: "When it comes to news, context is everything. Chronicle helps get the whole story",
          images: ["images/chronicle/chronicle_home.png","images/chronicle/chronicle_welcome.png", "images/chronicle/chronicle_show.png"],
          summary: "Chronicle helps to keep track of topics over time. The purpose of Chronicle is to help get a understanding of how topics are progressing, not just read and forget the latest news. With Chronicle you can create topics like Solar Techonolgy or SpaceX and save relevant news articles in chronological order.",
          features: ["Carousel scrolling using the Owl-Carousel Gem", "Upvote, downvote commenting system", "Public and Private Chronciles edited only by creators"],
          stack: "Tech Stack: Postgres, Ruby On Rails, JQuery"
        }
        break;
      case "prescribed":
        project = {
          title: "Prescribed",
          github: "http://getthewholestory.herokuapp.com/",
          demo: "https://github.com/rmody3/chronicle",
          tagline: "When it comes to news, context is everything. Chronicle helps get the whole story",
          images: ["images/chronicle/chronicle_home.png","images/chronicle/chronicle_welcome.png", "images/chronicle/chronicle_show.png"],
          summary: "Chronicle helps to keep track of topics over time. The purpose of Chronicle is to help get a understanding of how topics are progressing, not just read and forget the latest news. With Chronicle you can create topics like Solar Techonolgy or SpaceX and save relevant news articles in chronological order.",
          features: ["Carousel scrolling using the Owl-Carousel Gem", "Upvote, downvote commenting system", "Public and Private Chronciles edited only by creators"],
          stack: "Tech Stack: Postgres, Ruby On Rails, JQuery"
        }
        break;
      case "yea_or_nay":
        project = {
          title: "Yea Or Nay",
          github: "http://getthewholestory.herokuapp.com/",
          demo: "https://github.com/rmody3/chronicle",
          tagline: "When it comes to news, context is everything. Chronicle helps get the whole story",
          images: ["images/chronicle/chronicle_home.png","images/chronicle/chronicle_welcome.png", "images/chronicle/chronicle_show.png"],
          summary: "Chronicle helps to keep track of topics over time. The purpose of Chronicle is to help get a understanding of how topics are progressing, not just read and forget the latest news. With Chronicle you can create topics like Solar Techonolgy or SpaceX and save relevant news articles in chronological order.",
          features: ["Carousel scrolling using the Owl-Carousel Gem", "Upvote, downvote commenting system", "Public and Private Chronciles edited only by creators"],
          stack: "Tech Stack: Postgres, Ruby On Rails, JQuery"
        }
        break;
    }
    if (this.state.class == "projectDetails-active" && this.state.currProjectTitle===project){
      this.setState(() => {
          return {
            project: project,
            currProjectTitle: null,
            class: "projectDetails-inactive"
          }
      })
    } else {
      this.setState(() => {
          return {
            project: project,
            currProjectTitle: project,
            class: "projectDetails-active"
          }
      })
    }
    let height = $("#header").outerHeight()
    $('html,body').animate({
            scrollTop: $("div.projectDetails-inactive").position().top - height},
        500);
    $('html,body').animate({
            scrollTop: $("div.projectDetails-active").position().top - height},
        500);
  }


  render() {
    return (
      <div className="work">
        <h1>Projects</h1>
        <div className="projects-container">
          <Project id="chronicle" image='images/chronicle_logo.svg' title='Chronicle' updateProjectDetails={this.updateProjectDetails}/>
          <Project id="prescribed" image='images/prescribed_logo.svg' title='Prescribed' updateProjectDetails={this.updateProjectDetails}/>
          <Project id="yea_or_nay" image='images/yay_or_nay_logo.svg'title='Yea or Nay' updateProjectDetails={this.updateProjectDetails}/>
        </div>
        {<ProjectDetails class={this.state.class} project={this.state.project}/> }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {view: state.view}
}

export default connect(mapStateToProps)(Work)
