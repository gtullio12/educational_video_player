import React from "react";
import { Card } from "react-bootstrap";
import { ProfileIcon, CommentIcon, BackgroundIcon } from "./Icons";
import { useNavigate } from "react-router";

const cardStyle = {
  width: "30rem",
};

const Video = ({date, title, user, comments, id}) => {
  const navigate = useNavigate();

  const currentDate = Date.now();
  const diffDays = parseInt((currentDate - date) / (1000 * 60 * 60 * 24), 10); 

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
          <Card.Text>{user} * {diffDays}d ago</Card.Text>
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