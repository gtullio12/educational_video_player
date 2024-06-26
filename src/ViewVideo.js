import RecommendVideos from "./RecommendVideos";
import DisplayVideo from "./DisplayVideo";
import React from "react";

const ViewVideo = ({ currentVideoId }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{width: '75%', margin: '10px'}}>
        <DisplayVideo currentVideoId={currentVideoId} />
      </div>
      <div style={{width: '25%', margin: '10px'}}>
        <RecommendVideos />
      </div>
    </div>
  );
};

export default ViewVideo;
