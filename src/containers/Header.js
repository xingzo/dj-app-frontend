import React, { Component } from "react";
import "./Header.css";
import "./SocialMedia.css";
import SocialMedia from "./SocialMedia.js"

export default class Header extends Component {
  // const img_src =
  render() {
    return (
      <div>

      <header className = "row">
      <img src= {require('./kenny-gee-banner3.jpg')} alt="" />
        <SocialMedia />
      </header>
      </div>
    );
  }
}
