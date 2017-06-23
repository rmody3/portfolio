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
        <h2>Chronicle</h2>
        <p>When it comes to news, context is everything. Chronicle helps get the whole story</p>
        <div className="left-container">
          <ImageCarousel images={["images/chronicle/chronicle_home.png","images/chronicle/chronicle_welcome.png", "images/chronicle/chronicle_show.png"]} />
          <div className="project_links_container">
            <a target="_blank" title="demo Chronicle" href="http://getthewholestory.herokuapp.com/"><img className="project-links" src="images/button_demo.png" /></a>
            <a target="_blank" title="demo Chronicle" href="http://getthewholestory.herokuapp.com/"><img className="project-links" src="images/button_view-on-github.png" /></a>
          </div>
        </div>
        <div className="right-container">
          <div className="summary">
            Chronicle is a Ruby on Rails application that helps to keep track of topics over time.  The purpose of Chronicle is to help get a understanding of how topics are progressing, not just read and forget the latest news. With Chronicle you can create topics like Solar Techonolgy or SpaceX and save relevant news articles in chronological order. You can also view public Chronicles curated by people you trust.
          </div>
          <div className="detail-list">
            <ul>
              <li>Tech Stack: Postgres, Ruby On Rails, JQuery</li>
              <li>Interesting Technical Features:</li>
                <ul>
                  <li>Created carousel scrolling using the Owl-Carousel Gem</li>
                  <li>Created upvote, downvote commenting system</li>
                </ul>
            </ul>
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
