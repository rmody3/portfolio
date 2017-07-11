import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImageCarousel from '../imageCarousel'
import '../../stylesheets/chronicle.css'


class Chronicle extends Component {
  // constructor(){
  //   super()
  // }

  render() {
    return (
      <div>
        <div className="project-header">
          <h2 className="title">Chronicle</h2>
          <span>
          <a target="_blank" className="project-links" title="demo Chronicle" href="http://getthewholestory.herokuapp.com/">Demo</a>
          <a target="_blank" className="project-links"title="view on Github" href="https://github.com/rmody3/chronicle">View on Github</a>
          </span>
        </div>
        <p className="tagline">When it comes to news, context is everything. Chronicle helps get the whole story</p>

        <ImageCarousel images={["images/chronicle/chronicle_home.png","images/chronicle/chronicle_welcome.png", "images/chronicle/chronicle_show.png"]} />

        <div className="information-container">
          <div className="info">
            Chronicle helps to keep track of topics over time. The purpose of Chronicle is to help get a understanding of how topics are progressing, not just read and forget the latest news. With Chronicle you can create topics like Solar Techonolgy or SpaceX and save relevant news articles in chronological order.
          </div>
          <div className="info">
            Features of Note:
            <ul>
              <li>Carousel scrolling using the Owl-Carousel Gem</li>
              <li>Upvote, downvote commenting system</li>
              <li>Public and Private Chronciles edited only by creators</li>
            </ul>
          </div>
          <div className="info">
            Tech Stack: Postgres, Ruby On Rails, JQuery
          </div>
        </div>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {view: state.view}
// }

export default Chronicle
// default connect(mapStateToProps)(Work)
