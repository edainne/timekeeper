import React, { Component } from "react";
import { Panel, PanelGroup, Accordion } from "react-bootstrap";
class UserProfile extends Component {
  state = {};
  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            {this.props.component.userName}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          Age: {this.props.component.userAge}
          <br /> Location: {this.props.component.userLocation}
        </Panel.Body>
      </Panel>
    );
  }
}

export default UserProfile;
