import React, { Component } from "react";
import Header from "./Header.js";
import About from "./About.js";
import Music from "./Music.js";
import Subscribe from "./Subscribe.js";
import Contact from "./Contact.js";
import Stats from "./Stats.js";
import AboutNav from "./AboutNav.js"
import "./Profile.css";
import { LinkContainer } from "react-router-bootstrap";
import { Button, FormGroup, FormControl, ControlLabel, Modal,
        ModalHeader, ModalBody, ModalFooter} from "react-bootstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleAbout = this.handleAbout.bind(this);
    this.handleMusic = this.handleMusic.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleStats = this.handleStats.bind(this);

    this.state = {
      isAbout: false,
      isMusic: true,
      isContact: false,
      isSubscribe: false,
      isStats: false
    };
  }

  handleAbout(){
    this.setState({isAbout : true,
                  isMusic : false,
                  isContact: false,
                  isSubscribe: false,
                  isStats: false});

  }

  handleMusic(){
    this.setState({isMusic : true,
                  isAbout : false,
                  isContact: false,
                  isSubscribe: false,
                  isStats: false});

  }
  handleSubscribe(){
    this.setState({isSubscribe : true,
                  isAbout : false,
                  isContact: false,
                  isMusic: false,
                  isStats: false});

  }
  handleContact(){
    this.setState({isContact : true,
                  isAbout : false,
                  isMusic: false,
                  isSubscribe: false,
                  isStats: false});

  }
  handleStats(){
    this.setState({isStats : true,
                  isAbout : false,
                  isContact: false,
                  isSubscribe: false,
                  isMusic: false});

  }

  render() {
      var renderPage;
      if(this.state.isMusic){
        renderPage = <Music />
      }
      if(this.state.isAbout){
        renderPage = <About />
      }
      if(this.state.isSubscribe){
        renderPage = <Subscribe />
      }
      if(this.state.isContact){
        renderPage = <Contact />
      }
      if(this.state.isStats){
        renderPage = <Stats />
      }



    return (
      <div className="Home">
        <Header />
        <div className = "about-nav row">
          <button className="no-border-btn" onClick={this.handleMusic} >Music</button>
          <button className="no-border-btn" onClick={this.handleAbout} >About</button>
          <button className="no-border-btn" onClick={this.handleSubscribe} >Subscribe</button>
          <button className="no-border-btn" onClick={this.handleContact} >Contact</button>
          <button className="no-border-btn" onClick={this.handleStats} >Stats</button>

         </div>
         {renderPage}

        <div className="lander">
          <h1>Rest of profile</h1>
          <p>A simple dj app</p>
        </div>
      </div>
    );
  }
}
