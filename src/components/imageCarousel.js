import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Chronicle from './projects/chronicle'
// import Prescribed from './projects/prescribed'
// import YeaOrNay from './projects/yeaOrNay'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../stylesheets/imageCarousel.css'


class ImageCarousel extends Component {
  constructor(){
    super()
    this.state = {
      currentImageIndex: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      let currIndex = this.state.currentImageIndex + 1;
      if (currIndex >= this.props.images.length) {
         currIndex = 0;
     }
        this.setState(() => {
            return {
              currentImageIndex: currIndex
            }
        });
    }, 5000);
  }

  render() {
    let currImage=
    <div key={this.props.images[this.state.currentImageIndex]}>
      <img className="slide" src={this.props.images[this.state.currentImageIndex]}>
      </img>
      <div id="description">
        This is a test
      </div>
    </div>
    return (
      <ReactCSSTransitionGroup
        transitionName="translate"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        component="div"
        className="image-carousel">
        {currImage}
      </ReactCSSTransitionGroup>
    );
  }
}

export default ImageCarousel
