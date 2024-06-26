import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import React from "react";
import Video from "./Video";
import { api } from "./api";

/**
 * Retrieves videos on the backend and maps them to Video components.
 * Displays all videos in a grid
 */
const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api
      .get(process.env.REACT_APP_GET_VIDEOS_API_URL)
      .then((response) => response.json())
      .then((response) => setVideos(response.videos));
  }, []);

  const videosFromApi = videos.map((v) => {
    return (
      <Video
        date={v.created_at}
        title={v.title}
        user={v.user_id}
        comments={v.num_comments}
        description={v.description}
        video_url={v.video_url}
        id={v.id}
      />
    );
  });

  return (
    <div className="home-page-videos">
      <Row md={3} className="videos">
        {videosFromApi}
      </Row>
    </div>
  );
};

export default Videos;
