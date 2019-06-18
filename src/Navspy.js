import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Navbar, Nav, NavItem, NavLink,
         NavbarBrand, Button } from 'reactstrap';
import { Bubble, SwingLeftContent, ContentContainer } from './Animations.js';

class Navspy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            cycle: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleClicks = this.handleClicks.bind(this);
    }

    componentDidMount() {
        /* Set up click listener */
        window.addEventListener('click', this.handleClicks);
    }

    componentWillUnmount() {
        /* Remove click listener */
        window.removeEventListener('click', this.handleClicks);
    }

    toggle(evt, forceState=null) {
        /* Toggle visibility of navbar items, cycle animations */
        this.setState({
          cycle: (forceState === null) ? !this.state.cycle : forceState
        });
        setTimeout(() => {this.setState({
            isOpen: (forceState === null) ? !this.state.isOpen : forceState
        })}, this.state.isOpen ? 200 : 100);
    }

    handleClicks(evt) {
        if (!document.getElementById("nav").contains(evt.target)) {
            this.toggle(null, false);
        }
    }

    render() {
        const navStyle = {
            height: "0",
            maxWidth: "100%",
            backgroundColor: "rgba(0,0,0,0)",
            textAlign: "left"
        };
        const btnStyle = {
            borderRadius:"200px",
            backgroundColor:"#FAFAFA",
            borderColor:"#D4D4D4",
            borderWidth: "4px",
            color: "#D4D4D4"
        }
        // Set up navbar links
        var counter = 0;
        const navLinks = this.props.anchors.map(anchor => {
            var isCurAnchor = (this.props.curAnchor === anchor);
            var navLinkStyle = {
                color: isCurAnchor ? "#333" : "#7B7E7F",
                fontWeight: isCurAnchor ? "bold" : "normal",
                display: this.state.isOpen ? "" : "none",
            }
            return (
                <SwingLeftContent pose={this.state.cycle ? "visible" : "hidden"} key={counter}>
                  <NavItem className="px-3"><Bubble><NavLink className="button-a px-3" href={"#"+anchor} style={navLinkStyle}>
                    {this.props.names[counter++]}
                  </NavLink></Bubble></NavItem>
                </SwingLeftContent>
            );
        });
        return (
            <Container className="sticky-top mx-0" style={navStyle}>
              <Navbar expand="md" className="px-0" id="nav">
                <ContentContainer pose={this.state.cycle ? "visible" : "hidden"} className="ml-auto">
                  <Nav navbar>
                    { navLinks }
                  </Nav>
                </ContentContainer>
                <NavbarBrand className={this.state.isOpen ? "" : "ml-auto"}>
                  <Bubble><Button className="px-2 py-1" onClick={this.toggle} style={btnStyle}>
                    <h2 className="mb-0"><FontAwesomeIcon icon="ellipsis-h"/></h2>
                  </Button></Bubble>
                </NavbarBrand>
              </Navbar>
            </Container>
        );
    }
 }

export default Navspy;
