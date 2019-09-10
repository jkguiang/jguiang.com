import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { ContentContainer } from './Animations.js';

const themes = {
    "dark": {
        "color": "#262626",
        "text": "#FFF"
    },
    "light": {
        "color": "#F4F4F4",
        "text": "#000"
    }
}
const aligns = {
    "left": "px-5 text-left",
    "right": "text-right",
    "center": "mx-0 px-0 text-center"
}

class Content extends Component {
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
            color: theme.text
        };
        const align = aligns[this.props.align];
        const pose = (this.props.isVisible) ? "visible" : "hidden";
        return (
            <div ref={this.setRef} id={this.props.anchor} style={{ overflowX: "hidden" }}>
              <Container className={"d-flex py-5 "+align} style={contentStyle}>
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

export default Content;
