import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  // const img_src =
  render() {
    return (
      <div>

      <header className = "row">

        <div className="social-media-container">
        <img src= {require('./kenny-gee-banner3.jpg')} alt="" />
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
      </header>
      </div>
    );
  }
}
