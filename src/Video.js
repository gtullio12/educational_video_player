import React from "react";
import { Card } from "react-bootstrap";
import { ProfileIcon, CommentIcon, BackgroundIcon } from "./Icons";
import { useNavigate } from "react-router";

const cardStyle = {
  width: "30rem",
};

const Video = ({title, user, comments, id}) => {
  const navigate = useNavigate();

  return (
    <Card as="a" onClick={() => {
      navigate('/video/'+id);
      navigate(0);
    }
     } style={cardStyle}>
      <Card.Body>
        <BackgroundIcon />
        <Card.Title>{title}</Card.Title>
        <Card.Body style={{ display: "flex", flexDirection: "row" }}>
          <ProfileIcon />
          <Card.Text>{user}</Card.Text>
        </Card.Body>
        <Card.Body style={{ display: "flex", flexDirection: "row" }}>
          <CommentIcon />
          <Card.Text>{comments} comments</Card.Text>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default Video;