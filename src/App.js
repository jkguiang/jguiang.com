import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faBars, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Navspy from './Navspy.js';
import Landing from './Landing.js';
import Experience from './Experience.js';
import Content from './Content.js';
import Projects from './Projects.js';
import Education from './Education.js';

library.add( fab, faFileAlt, faBars, faEllipsisH );

class AppContent extends Component {
    render() {
        const children = this.props.children;
        var anchors = []
        var names = []
        for (var i = 0; i < children.length; i++) {
            var anchor = children[i].props.anchor;
            anchors.push(anchor);
            names.push(anchor[0].toUpperCase()+anchor.substring(1).toLowerCase());
        }
        return (
            <Fragment>
              <Navspy key="navspy" anchors={anchors} names={names}/>
              { this.props.children }
            </Fragment>
        );
    }
}

class App extends Component {
  render() {
    return (
      <AppContent>
        <Content anchor="home" theme="light" align="center" fullscreen={true}><Landing/></Content>
        <Content anchor="experience" theme="dark" align="left"><Experience/></Content>
        <Content anchor="projects" theme="light" align="center"><Projects/></Content>
        <Content anchor="education" theme="dark" align="left"><Education/></Content>
      </AppContent>
    );
  }
}

export default App;
