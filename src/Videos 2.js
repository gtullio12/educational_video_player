import { Card, CardGroup } from "react-bootstrap";
import { ProfileIcon, CommentIcon, BackgroundIcon } from "./Icons";
import Image from "react-bootstrap/Image";

const cardStyle = {
  width: "18rem",
};

const Videos = () => {
  return (
    <div>
      <CardGroup>
        <Card style={cardStyle}>
          <Card.Body>
            <BackgroundIcon />
            <Card.Text>Video 1</Card.Text>
            <ProfileIcon />
            <Card.Text>garret_tullio</Card.Text>
            <CommentIcon />
            <Card.Text>2 Comments</Card.Text>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Video 1</Card.Title>
            <Card.Text>Video 1</Card.Text>
            <ProfileIcon />
            <Card.Text>garret_tullio</Card.Text>
            <CommentIcon />
            <Card.Text>2 Comments</Card.Text>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Video 1</Card.Title>
            <Card.Text>Video 1</Card.Text>
            <ProfileIcon />
            <Card.Text>garret_tullio</Card.Text>
            <CommentIcon />
            <Card.Text>2 Comments</Card.Text>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Video 1</Card.Title>
            <Card.Text>Video 1</Card.Text>
            <ProfileIcon />
            <Card.Text>garret_tullio</Card.Text>
            <CommentIcon />
            <Card.Text>2 Comments</Card.Text>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Video 1</Card.Title>
            <Card.Text>Video 1</Card.Text>
            <ProfileIcon />
            <Card.Text>garret_tullio</Card.Text>
            <CommentIcon />
            <Card.Text>2 Comments</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Videos;
