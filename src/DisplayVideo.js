import { CommentIcon, ProfileIcon } from "./Icons";
import { Button, Form } from "react-bootstrap";

const DisplayVideo = ({
  title,
  user,
  num_comments,
  comments,
  description,
  video_url,
  id,
}) => {
  const display_comments = comments.comments.map((comment) => {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProfileIcon />
          <p>{comment.user_id}</p>
        </div>
        <p>{comment.content}</p>
      </div>
    );
  });
  return (
    <div>
      {video_url && (
        <video controls>
          <source src={video_url} type="video/mp4" />
        </video>
      )}
      <h1>{title}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ProfileIcon />
        <p>{user}</p>
      </div>
      <h2>Comments * {num_comments}</h2>
      <Form style={{ display: "flex", flexDirection: "row" }} >
        <Form.Control type="comment" placeholder="Add your comment..."/>
        <Button variant="primary">Comment</Button>
      </Form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CommentIcon />
        <p>{num_comments} comments</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>{display_comments}</div>
    </div>
  );
};

export default DisplayVideo;
