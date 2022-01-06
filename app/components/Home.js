

import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import {
  Card, CardBody, CardText, CardTitle, CardSubtitle, Button, Row, Col
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
              TThe async week project practices Reactstrap and Chart.js. Click through to the <a href='/users'>Users</a> or <a href='/chartjs'>Chart.js</a> to see more examples.
           </CardText>
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
                Go to Users
              </Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className="small-card">
              <CardTitle tag="h4">
                Chart.js
              </CardTitle>
              <CardText>
                See an example of a Chart.js implementation of the user data.
              </CardText>
              <Button>
                Go to Chart.js
              </Button>
            </Card>
          </Col>
        </Row>
        </div>
      </div>
    )}
}


export default connect(null, null)(Home);
