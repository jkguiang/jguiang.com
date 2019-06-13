import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Navbar, Nav, NavItem, NavLink, Row,
         Collapse, NavbarBrand, NavbarToggler, Button } from 'reactstrap';
import { Bubble, SwingLeftContent, ContentContainer } from './Animations.js';
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
            backgroundColor: "rgba(0,0,0,0)",
            textAlign: "left"
        };//#D4D4D4
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
                <SwingLeftContent pose={this.state.isOpen ? "visible" : "hidden"} key={anchor}>
                  <NavItem className="px-3"><Bubble><NavLink className="button-a px-3" href={"#"+anchor} style={navLinkStyle}>
                    {this.props.names[counter++]}
                  </NavLink></Bubble></NavItem>
                </SwingLeftContent>
            );
        });
        return (
            <Container className="sticky-top mx-0" style={ navStyle }>
              <Navbar expand="md" className="px-0">
                <NavbarBrand><Bubble><Button className="px-2 py-1" onClick={this.toggle} style={{ borderRadius:"200px" }}>
                  <h2 className="mb-0"><FontAwesomeIcon icon="ellipsis-h"/></h2>
                </Button></Bubble></NavbarBrand>
                <ContentContainer pose={this.state.isOpen ? "visible" : "hidden"}>
                  <Nav className="ml-auto" navbar>
                    { navLinks }
                  </Nav>
                </ContentContainer>
              </Navbar>
            </Container>
        );
    }
 }

export default Navspy;
