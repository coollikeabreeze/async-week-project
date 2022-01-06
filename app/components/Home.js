

import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import {
  Card, CardBody, CardText, CardTitle, CardSubtitle, Button, Row, Col, Image
} from "reactstrap";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="card">


        <Card body className="large-card">
          <CardTitle tag="h2">
            Async Week Project
          </CardTitle>
            <CardText className="text-center">
              TThe async week project practices Reactstrap and Chart.js. Click through to the <a href='/users'>Users</a> or <a href='/analytics'>Analytics</a> to see more examples.
           </CardText>
           <div id='home-images'>
           <a href="https://reactstrap.github.io/?path=/story/home-installation--page">
              <img src="https://images.ctfassets.net/po6t8ne9irg9/2qFIi0UYW5om126uDueIGy/fd9c353fa48c6105810735024189f368/reactstrap-React-Bootstrap-4-components.jpg"/>
            </a>
            <a href="https://www.chartjs.org/">
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--J2ALgvQ7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/cg2x3hamgbypwm7ve61s.jpg"/>
            </a>
          </div>
        </Card>


        <div id="smaller-cards">
        <Row>
          <Col sm="6">
            <Card body className="small-card">
              <CardTitle tag="h4">
                Users
              </CardTitle>
              <CardText>
                See an example of a table with user data implemented with Reactstrap.
              </CardText>
              <Button>
                <Link to='/users'>
                  Go to Users
                </Link>
              </Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className="small-card">
              <CardTitle tag="h4">
                Analytics
              </CardTitle>
              <CardText>
                See an example of a Chart.js implementation of the user data.
              </CardText>
              <Button>
                <Link to='/analytics'>
                  Go to Analytics
                </Link>
              </Button>
            </Card>
          </Col>
        </Row>
        </div>
      </div>
    )}
}


export default connect(null, null)(Home);
