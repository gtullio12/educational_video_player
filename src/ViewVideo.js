import RecommendVideos from "./RecommendVideos";
import DisplayVideo from "./DisplayVideo";
import React from "react";

const ViewVideo = ({ currentVideoId }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <DisplayVideo currentVideoId={currentVideoId} />
      </div>
      <div>
        <RecommendVideos />
      </div>
    </div>
  );
};

export default ViewVideo;
