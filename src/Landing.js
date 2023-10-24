import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SwingLeftContent, FadeContent, Bubble } from './Animations.js';
import cv from './assets/cv_jguiang.pdf';

class Landing extends Component {
    render() {
      const pose = this.props.isVisible ? "visible" : "hidden";
      const divStyle = {
          paddingLeft:"10px",
          paddingRight:"10px"
      }
      const linkStyle = {
          color: "#FAFAFA"
      }

      return (
        <Fragment>
          <SwingLeftContent pose={pose}><h1 className="display-4">Jonathan Guiang</h1></SwingLeftContent>
          <SwingLeftContent pose={pose}><p className="lead">
            <i>Physicist + Data Analyst + Programming Enthusiast</i>
          </p></SwingLeftContent>
          <FadeContent pose={pose}><div className="d-flex justify-content-center">
            <div style={divStyle}><Bubble><h2><a style={linkStyle} href="https://www.github.com/jkguiang" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a></h2></Bubble></div>
            <div style={divStyle}><Bubble><h2><a style={linkStyle} href={cv} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="file-alt"/></a></h2></Bubble></div>
            <div style={divStyle}><Bubble><h2><a style={linkStyle} href="https://www.linkedin.com/in/jonathanguiang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></h2></Bubble></div>
          </div></FadeContent>
        </Fragment>
      );
    }
}

export default Landing;
