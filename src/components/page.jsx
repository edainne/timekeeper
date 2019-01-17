import React, { Component } from "react";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
import Profile from "./profile";

class Page extends Component {
  state = {
    userName: this.props.userName,
    userAge: this.props.userAge,
    userLocation: this.props.userLocation
  };
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Profile component={this.state} />
          </Col>
          <Col xs={12} md={8}>
            <code> {6}</code>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Page;
