import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { ContentContainer } from './Animations.js';
import debounce from 'lodash/debounce';

const themes = {
    "dark": {
        "color": "#ECECEC",
        "text": "#333"
    },
    "light": {
        "color": "#FAFAFA",
        "text": "#000"
    }
}
const aligns = {
    "left": "px-5 text-left",
    "right": "text-right",
    "center": "mx-0 px-0 text-center"
}

class Content extends Component {
    constructor(props) {
      super(props);

      this.state = {
          isVisible: true,
          elemHeight: 0
      };

      this.elem = null;
      this.setRef = this.setRef.bind(this);
      this.isInViewport = this.isInViewport.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.isInViewport);
        const height = (this.elem) ? this.elem.clientHeight : 0;
        this.setState({ elemHeight: height });
        this.isInViewport();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isInViewport);
    }

    setRef(element) {
        this.elem = element;
    }

    isInViewport = debounce(() => {
        if (!this.elem) return false;
        const top = this.elem.getBoundingClientRect().top;
        const windHeight = window.innerHeight;
        this.setState({ isVisible: (top) >= -this.state.elemHeight*0.5 && (top+windHeight*0.1) <= windHeight });
        return;
    }, 100)

    render() {
        // Set visibility of children
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                isVisible: this.state.isVisible
            });
        });
        // Get theme
        const theme = themes[this.props.theme];
        const contentStyle = {
            minWidth: "100%",
            backgroundColor: theme.color,
            color: theme.text,
        };
        const align = aligns[this.props.align];
        const pose = (this.state.isVisible) ? "visible" : "hidden";
        return (
            <div ref={this.setRef} id={this.props.anchor} style={{ overflowX: "hidden" }}>
              <Container className={"d-flex "+(this.props.fullscreen ? "vh-100 " : "py-5 ")+align} style={contentStyle}>
                <div className="d-flex align-self-center w-100">
                  <ContentContainer style={{"width":"100%", "height":"100%"}} pose={pose}>
                    { children }
                  </ContentContainer>
                </div>
              </Container>
            </div>
        );
    }
}

export default Content;
