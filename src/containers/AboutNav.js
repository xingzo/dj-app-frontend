import React, { Component } from 'react';
import './AboutNav.css';
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class AboutNav extends Component {
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
       <div className = "about-nav row">
          <LinkContainer className = "col" to="/signup">
            <button className="no-border-btn" >Music</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/signup">
            <button className="no-border-btn" >About</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/login">
            <button className="no-border-btn" >Subscribe</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/login">
            <button className="no-border-btn" >Contact</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/login">
            <button className="no-border-btn" >Stats</button>
          </LinkContainer>
        </div>
    );
  }
}

export default AboutNav;
