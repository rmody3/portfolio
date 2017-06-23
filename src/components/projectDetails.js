import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Chronicle from './projects/chronicle'
// import Prescribed from './projects/prescribed'
// import YeaOrNay from './projects/yeaOrNay'
import '../stylesheets/projectDetails.css'


class ProjectDetails extends Component {
  constructor(){
    super()
    // this.scrollTo=this.scrollTo.bind(this)
  }

  // componentWillUpdate(nextProps){
  //   if (this.props.projectDetails === nextProps.projectDetails){
  //     this.props.updateProjectDetails(null)
  //   }
  // }

  // scrollTo = () => {
  //   debugger
  //   const node = ReactDOM.findDOMNode(this);
  //   node.scrollIntoView({ behavior: "smooth" });
  // }
  //
  // componentDidUpdate(){
  //   this.scrollTo()
  // }

  render() {

    return (
      <section className={this.props.class}>
        {this.props.currProject}
      </section>
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
