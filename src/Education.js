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
            <Card className="text-dark" style={{ borderColor: "#D4D4D4", color:"#333" }}>
              <CardHeader style={{ backgroundColor: "#F5F5F5", borderBottomColor: "#D4D4D4" }}>
                <Row className="mx-0">
                <Col md="6" className="px-0">
                  <h5 className="mb-0">{this.props.employer}</h5>
                  <p className="mb-0"><i>{this.props.position}</i></p>
                </Col>
                <Col md="6" className="text-right px-0">
                  <h5 className="lead mb-0">{this.props.location}</h5>
                  <p className="mb-0"><i>{this.props.duration}</i></p>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="auto" className="align-self-center text-center">
                    <figure className="figure">
                      <img src={this.props.image} className="figure-img img-fluid rounded mb-0"
                           alt="" width="100px" height="100px"/>
                    </figure>
                  </Col>
                <Col lg="10"><ul className="mb-0">{ highlights }</ul></Col>
                </Row>
              </CardBody>
            </Card>
        )
    }
}

class Education extends Component {
    render() {
        const pose = this.props.isVisible ? "visible" : "hidden";
        var counter = 0;
        const pages = (universities).map((u) =>
            <Fragment key={counter++}>
              <SwingLeftContent pose={pose}>
                <EducationCard employer={u.employer} position={u.position} duration={u.duration}
                               location={u.location} image={u.image} highlights={u.highlights}/>
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
