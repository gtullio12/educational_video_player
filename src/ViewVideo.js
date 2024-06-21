import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import RecommendVideos from "./RecommendVideos";
import { api } from "./api";
import DisplayVideo from "./DisplayVideo";

const ViewVideo = ({ videoId }) => {
  const [displayVideo, setDisplayVideo] = useState({video: {}});
  const [videoComments, setVideoComments] = useState({comments: []});

  useEffect(() => {
    api
      .get(process.env.REACT_APP_GET_VIDEO_API_URL + videoId)
      .then(response => response.json())
      .then(response => setDisplayVideo(response.video));
    api
        .get(process.env.REACT_APP_GET_VIDEO_COMMENTS_URL + videoId)
        .then(response => response.json())
        .then(response => setVideoComments({comments: response.comments}));
  }, []);

  return (
    <div>
      <div>
        <DisplayVideo
          title={displayVideo.title}
          user={displayVideo.user_id}
          num_comments={displayVideo.num_comments}
          comments={videoComments}
          description={displayVideo.description}
          video_url={displayVideo.video_url}
          id={displayVideo.id}
        />
        <Comments />
      </div>
      <div>
        <RecommendVideos />
      </div>
    </div>
  );
};

export default ViewVideo;
