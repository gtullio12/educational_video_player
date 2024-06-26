import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "./api";
import { useNavigate } from "react-router";

const Popup = ({ isPopoverOpen, setIsPopoverOpen }) => {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  return (
    <div className="popover-content">
      <h3>Upload a Video</h3>
      <Form className="uploadVideoTextArea">
        <Form.Control
          type="title"
          placeholder="Title your video"
          className="title"
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Title"
        />
        <Form.Control
          type="link"
          placeholder="https://your-video-link.com"
          onChange={(e) => setLink(e.target.value)}
          className="link"
          aria-label="Link"
        />
      </Form>
      <Button className="cancel" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Cancel</Button>
      <Button
        onClick={() => {
          // Call POST create video
          api
            .post(process.env.REACT_APP_POST_VIDEO_API_URL, {
              user_id: "garret_tullio",
              description: "Cool video",
              video_url: link,
              title: title,
            })
            .then((response) => response.json());
          setIsPopoverOpen(!isPopoverOpen);

          // Refresh page
          navigate('/');
          navigate(0);
        }}
      >
        Upload
      </Button>
    </div>
  );
};

export default Popup;
