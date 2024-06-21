import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "./api";

const POST_URL_API =
  "https://take-home-assessment-423502.uc.r.appspot.com/api/videos";

export class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      title: "",
      videoLink: "",
    });
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleLinkChange(event) {
    this.setState({
      videoLink: event.target.value,
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <h3>Upload a Video</h3>
        <Form>
          <Form.Control
            type="title"
            placeholder="Title your video"
            className="title"
            onChange={this.handleTitleChange}
            aria-label="Title"
          />
          <Form.Control
            type="link"
            placeholder="https://your-video-link.com"
            onChange={this.handleLinkChange}
            className="link"
            aria-label="Link"
          />
        </Form>
        <Button
          onClick={() => this.props.setIsPopoverOpen(!this.props.isPopoverOpen)}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            // Call POST create video
            api.post(POST_URL_API, {
              user_id: "garret_tullio",
              description: "Cool video",
              video_url: this.state.videoLink,
              title: this.state.title,
            }).then(response => response.json())
            .then(response => console.log(response))
             .then((response) => console.log(response));
          }}
        >
          Upload
        </Button>
      </div>
    );
  }
}
