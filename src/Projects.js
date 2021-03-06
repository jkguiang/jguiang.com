import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
         CardTitle, CardFooter, Button } from 'reactstrap';
import { Bubble, SwingLeftContent } from './Animations.js';
import { projects } from './assets/text.js';

class ProjectCard extends Component {
    // Card, Short description, thumbnail
    render() {
        return (
          <Card className="project-card h-100">
            <CardImg top src={this.props.image} alt="Card image cap" />
            <CardBody className="project-card-body text-left">
              <CardTitle>
                <h4 className="mb-0">{this.props.name}</h4>
                <p><i>{this.props.type}</i></p>
              </CardTitle>
              <CardText>{this.props.desc}</CardText>
            </CardBody>
            <CardFooter>
              <Bubble>
                <Button className="bubble-btn" href={this.props.href} target="_blank" rel="noopener noreferrer">
                  Learn More &raquo;
                </Button>
              </Bubble>
            </CardFooter>
          </Card>
        );
    }
}

class Projects extends Component {
  render() {
    const pose = this.props.isVisible ? "visible" : "hidden";
    var counter = 0;
    const cards = (projects).map((p) =>
        <Col md="4" className="d-flex align-items-stretch pb-4" key={counter++}>
          <SwingLeftContent pose={pose}>
            <ProjectCard image={p.image} name={p.name} type={p.type} desc={p.desc} href={p.href}/>
          </SwingLeftContent>
        </Col>
    );
    return (
        <Fragment>
          <SwingLeftContent pose={pose}><h1 className="display-4">Projects</h1></SwingLeftContent>
          <SwingLeftContent pose={pose}><p className="lead">
              <i>Things I have made.</i>
          </p></SwingLeftContent>
          <Container className="vh-25">
            <Row className="mx-0">
              { cards }
            </Row>
          </Container>
        </Fragment>
    );
  }
}

export default Projects;
