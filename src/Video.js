import React from "react";
import { Card, Col } from "react-bootstrap";
import { ProfileIcon, CommentIcon, BackgroundIcon } from "./Icons";
import { useNavigate } from "react-router";

const cardStyle = {
  margin: "5px",
  backgroundColor: "#89cff0",
  borderRadius: '20px'
};

const Video = ({ date, title, user, comments, id }) => {
  const navigate = useNavigate();

  const currentDate = Date.now();
  const diffDays = parseInt((currentDate - date) / (1000 * 60 * 60 * 24), 10);

  return (
    <Col>
      <Card
        as="a"
        onClick={() => {
          navigate("/video/" + id);
          navigate(0);
        }}
        style={cardStyle}
      >
        <Card.Body style={{height: "250px" }}></Card.Body>
      </Card>
      <div>
        <h2>{title}</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProfileIcon />
          <p style={{ marginLeft: "10px" }}>
            {user} * {diffDays}d ago
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <CommentIcon />
          <p style={{ marginLeft: "10px" }}>{comments} comments</p>
        </div>
      </div>
    </Col>
  );
};

export default Video;
