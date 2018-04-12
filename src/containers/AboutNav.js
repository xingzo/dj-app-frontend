import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./About";

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
      <div>
       <div className = "about-nav row">
          <LinkContainer className = "col" to="/music">
            <button className="no-border-btn" >Music</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/about">
            <button className="no-border-btn" >About</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/about">
            <button className="no-border-btn" >Subscribe</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/about">
            <button className="no-border-btn" >Contact</button>
          </LinkContainer>
          <LinkContainer className = "col" to="/about">
            <button className="no-border-btn" >Stats</button>
          </LinkContainer>
        </div>

        <div className="main">
            <Switch>
                <Route path="/about" component={ About } />
            </Switch>
        </div>

        </div>
    );
  }
}

export default AboutNav;
