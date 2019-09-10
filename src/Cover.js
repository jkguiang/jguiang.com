import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { ContentContainer } from './Animations.js';

const themes = {
    "dark": {
        "color": "#333",
        "text": "#FFF"
    },
    "light": {
        "color": "#FFF",
        "text": "#333"
    }
}
const aligns = {
    "left": "px-5 text-left",
    "right": "text-right",
    "center": "mx-0 px-0 text-center"
}

class Parallax extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bgDisplace: "0"
        };

        this.move = this.move.bind(this);
    }

    componentDidMount() {
        /* Set up scroll listener */
        window.addEventListener('scroll', this.move);
    }

    componentWillUnmount() {
        /* Remove scroll listener */
        window.removeEventListener('scroll', this.move);
    }

    move() {
        this.setState({ bgDisplace: String(-window.pageYOffset*0.2) });
    }

    render() {
        // Set visibility of children
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                isVisible: this.props.isVisible
            });
        });
        // Get theme
        const theme = themes[this.props.theme];
        const contentStyle = {
            minWidth: "100%",
            backgroundColor: theme.color,
            color: theme.text,
            textShadow: "0 0 20px rgba(0,0,0,0.35)",
            backgroundPosition: "center "+this.state.bgDisplace+"px",
        };
        const align = aligns[this.props.align];
        const pose = (this.props.isVisible) ? "visible" : "hidden";
        return (
            <div ref={this.setRef} id={this.props.anchor} style={{ overflow: "hidden" }}>
              <Container className={"d-flex vh-100 parallax-bg "+align} style={contentStyle}>
                <div className="d-flex align-self-center w-100">
                  <ContentContainer className="w-100 h-100" pose={pose}>
                    { children }
                  </ContentContainer>
                </div>
              </Container>
            </div>
        );
    }
}

export default Parallax;
