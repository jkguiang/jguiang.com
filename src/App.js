import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faBars, faEllipsisH, faBriefcase, faCode, faHome,
         faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Navspy from './Navspy.js';
import Landing from './Landing.js';
import Experience from './Experience.js';
import Content from './Content.js';
import Cover from './Cover.js';
import Projects from './Projects.js';
import Education from './Education.js';

library.add( fab, faFileAlt, faBars, faEllipsisH, faBriefcase, faCode, faHome,
             faGraduationCap  );

class AppContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            curAnchor: null,
            cycle: false
        };

        this.anchors = [];
        this.sections = [
            { "name": "Home", "icon": "home" },
            { "name": "Experience", "icon": "briefcase" },
            { "name": "Projects", "icon": "code" },
            { "name": "Education", "icon": "graduation-cap" }
        ];
        this.isInViewport = this.isInViewport.bind(this);
        this.checkAnchors = this.checkAnchors.bind(this);
    }

    componentDidMount() {
        /* Set up scroll listener */
        for (var i = 0; i < this.props.children.length; i++) {
            var anchor = this.props.children[i].props.anchor;
            this.anchors.push(anchor);
        }
        window.addEventListener('scroll', this.checkAnchors);
        this.checkAnchors();
    }

    componentWillUnmount() {
        /* Remove scroll listener */
        window.removeEventListener('scroll', this.checkAnchors);
    }

    isInViewport(elemID) {
        /* Check if a given element is visible */
        const elem = document.getElementById(elemID);
        if (!elem) return false;
        const top = elem.getBoundingClientRect().top;
        const elemHeight = elem.clientHeight;
        const windHeight = window.innerHeight;
        const isVisible = ((top) >= -elemHeight*0.75 && (top+windHeight*0.1) <= windHeight*0.5);
        return isVisible;
    }

    checkAnchors() {
        /* Check if any given anchors are visible */
        for (var i = 0; i < this.anchors.length; i++) {
            var anchor = this.anchors[i];
            if (this.isInViewport(anchor)) {
                this.setState({ curAnchor: anchor });
            }
        }
    }

    render() {
        // Set visibility of children
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                isVisible: (child.props.anchor === this.state.curAnchor)
            });
        });
        return (
            <Fragment>
              <Navspy key="navspy" curAnchor={this.state.curAnchor} anchors={this.anchors} sections={this.sections}/>
              { children }
            </Fragment>
        );
    }
}

class App extends Component {
  render() {
    return (
      <AppContent>
        <Cover anchor="home" theme="dark" align="center" cover={true}><Landing/></Cover>
        <Content anchor="experience" theme="dark" align="left"><Experience/></Content>
        <Content anchor="projects" theme="light" align="center"><Projects/></Content>
        <Content anchor="education" theme="dark" align="left"><Education/></Content>
      </AppContent>
    );
  }
}

export default App;
