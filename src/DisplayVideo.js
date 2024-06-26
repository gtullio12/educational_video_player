import { ProfileIcon } from "./Icons";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "./api";

const DisplayVideo = ({ currentVideoId }) => {
  const [userComment, setUserComment] = useState("");
  const [videoComments, setVideoComments] = useState({ comments: [] });
  const [displayVideo, setDisplayVideo] = useState({});
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function updateComments() {
    api
      .get(process.env.REACT_APP_GET_VIDEO_COMMENTS_URL + currentVideoId)
      .then((response) => response.json())
      .then((response) => {
        setVideoComments({ comments: response.comments });
      });
  }

  useEffect(() => {
    updateComments();
    api
      .get(process.env.REACT_APP_GET_VIDEO_API_URL + currentVideoId)
      .then((response) => response.json())
      .then((response) => setDisplayVideo(response.video));
  }, []);

  const uploadedDate = new Date(displayVideo.created_at);
  const formatDate =
    monthNames[uploadedDate.getMonth()] +
    " " +
    uploadedDate.getDate() +
    ", " +
    uploadedDate.getFullYear();

  const display_comments = videoComments.comments.map((comment) => {
    const date = new Date(comment.created_at);
    const currentDate = Date.now();
    const diffDays = parseInt((currentDate - date) / (1000 * 60 * 60 * 24), 10);

    return (
      <div style={{marginBottom: '30px', marginTop: '30px'}}>
        <div style={{display: "flex", flexDirection: "row" }}>
          <ProfileIcon />
          <p>
            {comment.user_id} * {diffDays}d ago
          </p>
        </div>

        <p style={{ width:'fit-content', padding: '10px', borderRadius: '10px', backgroundColor: "#DCDCDC" }}> <span>{comment.content}</span> </p>
      </div>
    );
  });
  return (
    <div>
      {displayVideo.video_url && (
        <video style={{borderRadius:'20px'}} controls width="100%">
          <source src={displayVideo.video_url} type="video/mp4" />
        </video>
      )}
      <h1>{displayVideo.title}</h1>
      <div>
        <p>
          {displayVideo.user_id} * Uploaded {formatDate}
        </p>
      </div>
      <h3>Comments * {displayVideo.num_comments}</h3>
      <Form style={{ margin: "10px", display: "flex", flexDirection: "row" }}>
        <Form.Control
          style={{ marginRight: "10px" }}
          onChange={(e) => {
            setUserComment(e.target.value);
          }}
          value={userComment}
          type="comment"
          placeholder="Add your comment..."
        />
        <Button
          onClick={() => {
            api
              .post(process.env.REACT_APP_POST_COMMENT_API_URL, {
                video_id: currentVideoId,
                content: userComment,
                user_id: "garret_tullio",
              })
              .then(() => updateComments());
            setUserComment("");
          }}
          variant="primary"
        >
          Comment
        </Button>
      </Form>
      {display_comments && <div>{display_comments}</div>}
    </div>
  );
};

export default DisplayVideo;
