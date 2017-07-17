import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Chronicle from './projects/chronicle'
// import Prescribed from './projects/prescribed'
// import YeaOrNay from './projects/yeaOrNay'
import '../stylesheets/projectDetails.css'
import ImageCarousel from './imageCarousel'



class ProjectDetails extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className={this.props.class}>
        <div className="project-header">
          <h2 className="title">{this.props.project.title}</h2>
          <span>
          <a target="_blank" className="project-links" title="demo" href={this.props.project.demo}>Demo</a>
          <a target="_blank" className="project-links"title="view on Github" href={this.props.project.github}>View on Github</a>
          </span>
        </div>
        <p className="tagline">{this.props.project.tagline}</p>

        <ImageCarousel images={this.props.project.images} />

        <div className="information-container">
          <div className="info">
            {this.props.project.summary}
          </div>
          <div className="info">
            Features of Note:
            <ul>
              {this.props.project.features.map((feature)=>{
                <li>feature</li>
              })}
            </ul>
          </div>
          <div className="info">
            {this.props.project.stack}
          </div>
        </div>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {projectDetails: state.projectDetails}
// }
//
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({
//     updateProjectDetails: updateProjectDetails
//   }, dispatch)
// }

export default ProjectDetails
// connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
