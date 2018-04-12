import React, { Component } from 'react';
import './Music.css';
import { Container, Row, Col } from 'react-bootstrap';

class Music extends Component {
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
      <main className = "main-container">

    <Row>
      <Col sm="6">
        <img className = "album-cover" src="on-my-own.jpg" alt="" />
        <div className="music-player">
          <iframe width="100%" height="90" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/372287354&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

        </div>
        <h2 className = "sound-title">Wakanda Mix</h2>
        <h4>dj shinski</h4>
      </Col>

      <Col sm="6">
        <img className = "album-cover" src="on-my-own.jpg" alt="" />
        <div className="music-player">
          <iframe width="100%" height="90" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421343235&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </div>
        <h2 className = "sound-title">Wakanda Mix</h2>
        <h4>dj shinski</h4>
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <img className = "album-cover" src="on-my-own.jpg" alt="" />
        <div className="music-player">
          <iframe width="100%" height="90" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/372287354&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

        </div>
        <h2 className = "sound-title">Wakanda Mix</h2>
        <h4>dj shinski</h4>
      </Col>

      <Col sm="6">
        <img className = "album-cover" src="on-my-own.jpg" alt="" />
        <div className="music-player">
          <iframe width="100%" height="90" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421343235&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </div>
        <h2 className = "sound-title">Wakanda Mix</h2>
        <h4>dj shinski</h4>
      </Col>
    </Row>
    <button className="btn btn-primary" >All Sounds</button>

  </main>
  </div>
    );
  }
}

export default Music;
