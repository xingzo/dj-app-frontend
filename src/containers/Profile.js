import React, { Component } from "react";
import Header from "./Header.js";
import AboutNav from "./AboutNav.js"
import "./Profile.css";
import { Button, FormGroup, FormControl, ControlLabel, Modal,
        ModalHeader, ModalBody, ModalFooter} from "react-bootstrap";

export default class Profile extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <AboutNav />
        <div className="lander">
          <h1>Rest of profile</h1>
          <p>A simple dj app</p>
        </div>
      </div>
    );
  }
}
