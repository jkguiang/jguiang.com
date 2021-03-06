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
        // Set up navbar links
        const navLinks = this.props.anchors.map((anchor, index) => {
            var isCurAnchor = (this.props.curAnchor === anchor);
            var section = this.props.sections[index];
            return (
                <SwingLeftContent pose={this.state.cycle ? "visible" : "hidden"} key={index}>
                  <NavItem className="px-3">
                    <Bubble>
                      <NavLink className="bubble-btn px-3" href={"#"+anchor} active={isCurAnchor}
                               style={{ display: this.state.isOpen ? "" : "none" }}>
                        <FontAwesomeIcon icon={section.icon}/> {section.name}
                      </NavLink>
                    </Bubble>
                  </NavItem>
                </SwingLeftContent>
            );
        });
        return (
            <Container className="sticky-top nav-container mx-0">
              <Navbar expand="md" className="px-0" id="nav">
                <ContentContainer pose={this.state.cycle ? "visible" : "hidden"} className="ml-auto">
                  <Nav navbar>
                    { navLinks }
                  </Nav>
                </ContentContainer>
                <NavbarBrand className={this.state.isOpen ? "" : "ml-auto"}>
                  <Bubble><Button className="nav-toggler bubble-btn px-2 py-1" onClick={this.toggle} active={this.state.isOpen}>
                    <h2 className="mb-0"><FontAwesomeIcon icon="ellipsis-h"/></h2>
                  </Button></Bubble>
                </NavbarBrand>
              </Navbar>
            </Container>
        );
    }
 }

export default Navspy;
