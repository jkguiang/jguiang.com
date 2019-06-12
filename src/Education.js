import React, { Component, Fragment } from 'react';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { SwingLeftContent } from './Animations.js';
import { universities } from './text.js';

class EducationCard extends Component {
    render() {
        var counter = 0;
        const highlights = this.props.highlights.map((h) =>
            <li key={counter++}><b>{h.name}:</b> {h.desc}</li>
        );
        return (
            <Card className="text-dark" style={{borderColor: "#D4D4D4", color:"#333"}}>
              <CardHeader style={{backgroundColor: "#F5F5F5", borderBottomColor: "#D4D4D4"}}>
                <Row className="mx-0">
                <Col md="6">
                  <h4>{this.props.employer}</h4>
                  <h5 className="lead"><i>{this.props.position}</i></h5>
                </Col>
                <Col md="6" className="text-right">
                  <h5 className="lead"><i>{this.props.dates}</i></h5>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <ul>{ highlights }</ul>
              </CardBody>
            </Card>
        )
    }
}

class Education extends Component {
    render() {
        const pose = this.props.isVisible ? "visible" : "hidden";
        var counter = 0;
        const pages = (universities).map((e) =>
            <Fragment key={counter++}>
              <SwingLeftContent pose={pose}>
                <EducationCard employer={e.employer} position={e.position} dates={e.dates} highlights={e.highlights}/>
              </SwingLeftContent>
              <p><br/></p>
            </Fragment>
        );
        return (
            <Fragment>
              <SwingLeftContent pose={pose}><h1 className="display-4">Education</h1></SwingLeftContent>
              <SwingLeftContent pose={pose}><p className="lead">
                <i>Libraries where I have studied.</i>
              </p></SwingLeftContent>
              { pages }
            </Fragment>
        );
    }
}

export default Education;
