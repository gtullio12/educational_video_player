import React from "react";
import { Card } from "react-bootstrap";
import { ProfileIcon, CommentIcon, BackgroundIcon } from "./Icons";

const cardStyle = {
  width: "18rem",
};

export class Video extends React.Component {

  render() {
    return (
      <Card style={cardStyle}>
        <Card.Body>
          <BackgroundIcon />
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Body style={{ display: "flex", flexDirection: "row" }}>
            <ProfileIcon />
            <Card.Text>{this.props.user}</Card.Text>
          </Card.Body>
          <Card.Body style={{ display: "flex", flexDirection: "row" }}>
            <CommentIcon />
            <Card.Text>{this.props.comments} comments</Card.Text>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  }
}
