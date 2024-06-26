import React from "react";
import { Card, Col } from "react-bootstrap";
import { ProfileIcon, CommentIcon, BackgroundIcon } from "./Icons";
import { useNavigate } from "react-router";
import { getDateDifference } from "./Date";

const cardStyle = {
  margin: "5px",
  backgroundColor: "#89cff0",
  borderRadius: '20px'
};

/**
 * Component Video card. Should have the thumbnail of the video which is just a colored background.
 * Also contains the profile of the user, and amount of comments, and date was posted
 */
const Video = ({ date, title, user, comments, id }) => {
  const navigate = useNavigate();
  const diffDays = getDateDifference(date);

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
