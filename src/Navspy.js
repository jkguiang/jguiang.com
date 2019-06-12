import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Navbar, Nav, NavItem, NavLink,
         Collapse, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Bubble } from './Animations.js';
import cv from './latex_cv.pdf';
import debounce from 'lodash/debounce';

class Navspy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            curAnchor: this.props.anchors[0]
        };

        this.toggle = this.toggle.bind(this);
        this.isInViewport = this.isInViewport.bind(this);
        this.checkAnchors = this.checkAnchors.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkAnchors);
        this.checkAnchors();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkAnchors);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    isInViewport(elemID) {
        const elem = document.getElementById(elemID);
        if (!elem) return false;
        const top = elem.getBoundingClientRect().top;
        const elemHeight = elem.clientHeight;
        const windHeight = window.innerHeight;
        const isVisible = ((top) >= -elemHeight*0.5 && (top+windHeight*0.1) <= windHeight);
        return isVisible;
    }

    checkAnchors = debounce(() => {
        for (var i = 0; i < this.props.anchors.length; i++) {
            var anchor = this.props.anchors[i];
            if (this.isInViewport(anchor)) {
                this.setState({ curAnchor: anchor });
            }
        }
    }, 100)

    render() {
        const navStyle = {
            height: "0%",
            maxWidth: "100%",
            backgroundColor: "rgba(0,0,0,0.1)"
        };
        const divStyle = {
            paddingLeft:"10px",
            paddingRight:"10px"
        };
        const linkStyle = {
            color: "#333"
        };
        var counter = 0;
        const navLinks = this.props.anchors.map(anchor => {
            var isCurAnchor = this.state.curAnchor === anchor;
            var navLinkStyle = {
                color: isCurAnchor ? "#000" : "#333",
                fontWeight: isCurAnchor ? "bold" : "normal"
            }
            return (
                <NavItem key={anchor}>
                  <NavLink className={isCurAnchor ? "disabled" : ""} href={"#"+anchor} style={navLinkStyle}>
                    <Bubble>{this.props.names[counter++]}</Bubble>
                  </NavLink>
                </NavItem>
            );
        });
        return (
            <Container className="sticky-top mx-0" style={ navStyle }>
              <Navbar expand="md">
                  <div className="d-flex justify-content-center">
                    <div style={divStyle}><Bubble><NavbarBrand style={linkStyle} href="https://www.github.com/jkguiang" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></NavbarBrand></Bubble></div>
                    <div style={divStyle}><Bubble><NavbarBrand style={linkStyle} href={cv} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="file-alt"/></NavbarBrand></Bubble></div>
                    <div style={divStyle}><Bubble><NavbarBrand style={linkStyle} href="https://www.linkedin.com/in/jonathanguiang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']}/></NavbarBrand></Bubble></div>
                  </div>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    { navLinks }
                  </Nav>
                </Collapse>
              </Navbar>
            </Container>
        );
    }
 }

export default Navspy;
