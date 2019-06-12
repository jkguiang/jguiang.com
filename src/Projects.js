import React, { Component, Fragment } from 'react';
import { Container, Row, Card, CardImg, CardText, CardBody,
         CardTitle, CardFooter, Button } from 'reactstrap';
import { SwingLeftContent } from './Animations.js';

class ProjectCard extends Component {
    // Card, Short description, thumbnail
    render() {
        var thisURL = "/projects/"+this.props.name;
        return (
          <Card>
            <CardImg top src="https://via.placeholder.com/1000x500" alt="Card image cap" />
            <CardBody className="text-left">
              <CardTitle>Title</CardTitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu eros nisl. Donec sollicitudin nisl nisi, sit amet rutrum nibh faucibus sit amet.</CardText>
            </CardBody>
            <CardFooter><Button href="https://via.placeholder.com/400x300" outline>Learn More &raquo;</Button></CardFooter>
          </Card>
        );
    }
}

class Projects extends Component {
  render() {
    const pose = this.props.isVisible ? "visible" : "hidden";
    return (
        <Fragment>
          <SwingLeftContent pose={pose}><h1 className="display-4">Projects</h1></SwingLeftContent>
          <SwingLeftContent pose={pose}><p className="lead">
              <i>Things I have made.</i>
          </p></SwingLeftContent>
          <Container className="vh-25">
            <Row className="mx-0">
              <div className="col-md-4 d-flex align-items-stretch"><SwingLeftContent pose={pose}>
                <ProjectCard/>
              </SwingLeftContent></div>
              <div className="col-md-4 d-flex align-items-stretch"><SwingLeftContent pose={pose}>
                <ProjectCard/>
              </SwingLeftContent></div>
              <div className="col-md-4 d-flex align-items-stretch"><SwingLeftContent pose={pose}>
                <ProjectCard/>
              </SwingLeftContent></div>
            </Row>
          </Container>
        </Fragment>
    );
  }
}

export default Projects;
