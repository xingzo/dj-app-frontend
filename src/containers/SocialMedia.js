import React, { Component } from 'react';
import './SocialMedia.css';

class SocialMedia extends Component {
  // constructor(props){
    // super();
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="social-media-container">
      <h2>Now Streaming</h2>
      <div className="row">
        <a href = "#" > <i className="fa fa-facebook-square" aria-hidden = "true"> </i></a>
        <a href = "#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href = "#"><i className="fa fa-soundcloud" aria-hidden="true"></i></a>
        <a href = "#" > <i className="fa fa-mixcloud" aria-hidden = "true"> </i></a>
        <a href = "#"><i className="fa fa-spotify" aria-hidden="true"></i></a>
        <a href = "#"><i className="fa fa-youtube" aria-hidden="true"></i></a>
      </div>
      </div>
    );
  }
}

export default SocialMedia;
