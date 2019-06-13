import React, { Component, Fragment } from 'react';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { SwingLeftContent } from './Animations.js';
import { experiences } from './text.js';

class ExperienceCard extends Component {
    render() {
        var counter = 0;
        const highlights = this.props.highlights.map((h) =>
            <li key={counter++}><b>{h.name}:</b> {h.desc}</li>
        );
        return (
            <Card className="text-dark" style={{borderColor: "#D4D4D4", color:"#333"}}>
              <CardHeader style={{backgroundColor: "#F5F5F5", borderBottomColor: "#D4D4D4"}}>
                <Row className="mx-0">
                <Col md="6" className="px-0">
                  <h4>{this.props.employer}</h4>
                  <h5 className="lead mb-0"><i>{this.props.position}</i></h5>
                </Col>
                <Col md="6" className="text-right px-0">
                  <h4 className="lead">{this.props.location}</h4>
                  <h5 className="lead mb-0"><i>{this.props.duration}</i></h5>
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                <Col md="2" className="align-self-center text-center">
                <figure className="figure">
                  <img src={this.props.image} className="figure-img img-fluid rounded" alt="image."/>
                </figure>
                </Col>
                <Col md="10"><ul>{ highlights }</ul></Col>
                </Row>
              </CardBody>
            </Card>
        )
    }
}

class Experience extends Component {
    render() {
        const pose = this.props.isVisible ? "visible" : "hidden";
        var counter = 0;
        const pages = (experiences).map((e) =>
            <Fragment key={counter++}>
              <SwingLeftContent pose={pose}>
                <ExperienceCard employer={e.employer} position={e.position} duration={e.duration}
                                location={e.location} image={e.image} highlights={e.highlights}/>
              </SwingLeftContent>
              <p><br/></p>
            </Fragment>
        );
        return (
            <Fragment>
              <SwingLeftContent pose={pose}><h1 className="display-4">Experience</h1></SwingLeftContent>
              <SwingLeftContent pose={pose}><p className="lead">
                <i>Jobs I have had.</i>
              </p></SwingLeftContent>
              { pages }
            </Fragment>
        );
    }
}

export default Experience;
