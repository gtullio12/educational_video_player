import { CommentIcon, ProfileIcon } from "./Icons";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "./api";

const DisplayVideo = ({videoId}) => {
  const [userComment, setUserComment] = useState("");
  const [videoComments, setVideoComments] = useState({ comments: [] });
  const [displayVideo, setDisplayVideo] = useState({});

  function updateComments() {
    api
      .get(process.env.REACT_APP_GET_VIDEO_COMMENTS_URL + videoId)
      .then((response) => response.json())
      .then((response) => {
        setVideoComments({ comments: response.comments });
      });
  }

  useEffect(() => {
    updateComments();
    api
      .get(process.env.REACT_APP_GET_VIDEO_API_URL + videoId)
      .then((response) => response.json())
      .then((response) => setDisplayVideo(response.video));
  }, []);

  const display_comments = videoComments.comments.map((comment) => {
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
      {displayVideo.video_url && (
        <video controls width="100%">
          <source src={displayVideo.video_url} type="video/mp4" />
        </video>
      )}
      <h1>{displayVideo.title}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ProfileIcon />
        <p>{displayVideo.user}</p>
      </div>
      <h2>Comments * {displayVideo.num_comments}</h2>
      <Form style={{ display: "flex", flexDirection: "row" }}>
        <Form.Control
          onChange={(e) => {
            setUserComment(e.target.value);
          }}
          type="comment"
          placeholder="Add your comment..."
        />
        <Button
          onClick={() => {
            api.post(process.env.REACT_APP_POST_COMMENT_API_URL, {
              video_id: videoId,
              content: userComment,
              user_id: "garret_tullio",
            })
            .then(() => updateComments());
          }}
          variant="primary"
        >
          Comment
        </Button>
      </Form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CommentIcon />
        <p>{displayVideo.num_comments} comments</p>
      </div>
      <div>
        <p>{displayVideo.description}</p>
      </div>
      {display_comments && <div>{display_comments}</div>}
    </div>
  );
};

export default DisplayVideo;
